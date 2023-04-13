import { useEffect } from 'react';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography  from '@mui/material/Typography';

import { Post } from '../../types/models';

interface PostHeaderProps {
  post: Post | null;
}

function hoursSince(date: string): number {
  const now = new Date()
  const createdAt = new Date(date)
  const diffInMs = Math.abs(now.getTime() - createdAt.getTime())
  const diffInHours = Math.floor(diffInMs / 1000 / 60 / 60)
  return diffInHours
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return formatter.format(date);
}


const PostHeader: React.FC<PostHeaderProps> = ({ post }) => {
  if (!post) {
    return <div>Loading...</div>;
  }
  
  const { title, createdAt, profile } = post;
  const name = profile?.name || "Unknown User"
  return (
    <Box display='flex' alignItems='baseline'>
      <CardHeader
        avatar={
          <Avatar aria-label="post">
            {name.charAt(0)}
          </Avatar>
        }
        title={title}
        subheader={`Posted by ${name} ${hoursSince(createdAt)} hours ago`}
      />
    </Box>
  );
};

export default PostHeader;
