import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import PostHeader from '../PostHeader/PostHeader';
import CommentBar from '../CommentBar/CommentBar';

//types
import { Post } from '../../types/models';

interface PostCardProps {
  post: Post | null;
}

const PostCard = ({ post }: PostCardProps) => {
  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <Card sx={{ width: "100%", flexDirection: "column", marginBottom: "10px" }}>
        <PostHeader post={post} />
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
