import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import PostHeader from '../PostHeader/PostHeader';
import CommentBar from '../CommentBar/CommentBar';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Box from '@mui/material/Box';

//types
import { Post, User } from '../../types/models';

interface PostCardProps {
  user: User | null;
  post: Post | null;
  handleDeletePost: (id: number) => void
}

const PostCard = ({ post, handleDeletePost, user }: PostCardProps) => {
  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <Card sx={{ width: "100%", flexDirection: "column", marginBottom: "10px" }}>
        <PostHeader post={post} />
        {user && user.profile.id === post.profile.id && (
          <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end", paddingBottom: 1, paddingRight: 1, marginTop: -8 }}>

            <DeleteForeverIcon onClick={() => handleDeletePost(post.id)} style={{ cursor: "pointer" }} />
          </Box>
        )}
        <CardContent>
          <Typography gutterBottom variant="body2" color="text.secondary">
            {post.content}
          </Typography>
        </CardContent>
      <CommentBar comments={post.comments} />
    </Card>
  );
};

export default PostCard;
