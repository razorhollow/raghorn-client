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

//types
import { Category } from '../../types/models'
interface BottomNavProps {
  categories: Category[] | null;
}

export default function BottomNav(props: BottomNavProps) {

  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

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
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="post-title"
          label="Title"
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="post-content"
          label="Content"
          type="text"
          fullWidth
          multiline
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            id="post-category"
            value={selectedCategory}
            onChange={handleCategoryChange}
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
        <Button onClick={handleClose}>Submit</Button>
      </DialogActions>
    </Dialog>
    </Box>
    
  );
}