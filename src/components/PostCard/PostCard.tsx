import { Link } from 'react-router-dom';

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
    <Link to={`/posts/${post.id}`}>
      <article>
        <header>
          <span>
            <h1>{post.title}</h1>
          </span>
        </header>
        <p></p>
      </article>
    </Link>
  );
};

export default PostCard;