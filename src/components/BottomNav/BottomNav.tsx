import { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import EditNoteIcon from '@mui/icons-material/EditNote';
import EventIcon from '@mui/icons-material/Event';
import FilterListIcon from '@mui/icons-material/FilterList';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { SelectChangeEvent } from '@mui/material/Select';
import * as postService from '../../services/postService'

//types
import { Category, User, Post } from '../../types/models'
interface BottomNavProps {
  categories: Category[] | null;
  user: User | null;
  handleNewPost: (newPost: Post) => void;
}

export default function BottomNav(props: BottomNavProps) {

  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    categoryId: null as number | null,
    profileId: null as number | null | undefined
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    setSelectedCategory(event.target.value);
    const categoryId = parseInt(event.target.value)
    setFormData({ ...formData, categoryId: categoryId })
  };

  const handleSubmit = async (event: React.FormEvent<HTMLDivElement>) => {

    event.preventDefault()
    setFormData({...formData, profileId: props.user?.profile.id})
    const { title, content, categoryId, profileId } = formData
    if (title && content && categoryId !== null && props.user) {
      try {
        const newPostData: Partial<Post> = {
          ...formData,
          categoryId: categoryId as number | undefined,
        }
        const newPost = await postService.createPost(newPostData);
        newPost && props.handleNewPost(newPost)
        handleClose()
      } catch (error) {
        console.error('Error creating post:', error)
      }
    } else {
      console.error('All fields are required')
    }
  }

  return (
    <Box sx={{ width: "100vw", position: 'fixed', bottom: 0, left: 0, right: 0}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Filter" icon={<FilterListIcon />} />
        <BottomNavigationAction
          label="Post"
          onClick={handleOpen}
          icon={
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                backgroundColor: (theme) => theme.palette.secondary.main,
                padding: '10px',
                marginTop: '-30px',
                marginBottom: '10px'
              }}
            >
              <EditNoteIcon sx={{ color: '#ffffff'}} />
            </Box>
          }
          sx={{
            '&.Mui-selected': {
              color: (theme) => theme.palette.primary.main,
            },
          }}
        />
        <BottomNavigationAction label="Events" icon={<EventIcon />} />
      </BottomNavigation>
      <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create a new post</DialogTitle>
      <Box
        component="form"
        onSubmit={handleSubmit}
      >
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="post-title"
            label="Title"
            type="text"
            fullWidth
            name="title"
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="post-content"
            label="Content"
            type="text"
            fullWidth
            multiline
            name="content"
            onChange={handleChange}
          />
          <FormControl 
            fullWidth margin="normal"
            onChange={handleChange}
          >
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              id="post-category"
              value={selectedCategory}
              onChange={handleCategoryChange}
              name="category"
            >
              {props.categories && props.categories.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type='submit'>Submit</Button>
        </DialogActions>
      </Box>
    </Dialog>
    </Box>
    
  );
}