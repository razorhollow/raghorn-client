import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


//types
import { Post } from '../../types/models';
import styled from '@emotion/styled'

interface PostCardProps {
  post: Post | null;
}

//styles


const PostCard = ({ post }: PostCardProps) => {
  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <Card sx={{width: "100%", flexDirection: 'column'}}>
      <CardActionArea 
        component={Link} 
        to={`/posts/${post.id}`}
        sx={{
          '&:hover': {
            color: 'inherit',
          },
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            {post.content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PostCard;