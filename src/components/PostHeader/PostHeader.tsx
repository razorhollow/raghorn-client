import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';

import { Post } from '../../types/models';

interface PostHeaderProps {
  post: Post | null;
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
  console.log(profile.name);
  return (
    <CardHeader
      avatar={
        <Avatar aria-label="post">
          {profile.name.charAt(0)}
        </Avatar>
      }
      title={title}
      subheader={formatDate(createdAt)}
    />
  );
};

export default PostHeader;
