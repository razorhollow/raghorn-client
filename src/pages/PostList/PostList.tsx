import { useState } from "react"
import PostCard from "../../components/PostCard/PostCard";

//style

//types
import { Post } from '../../types/models'
interface PostlistProps {
  posts: Post[] | null;
}

const PostList = (props: PostlistProps) => {
  console.log('PostList props:', props)
  return (
    <main>
      {props.posts?.map((post) => (
        <PostCard post={post} />
      ))}
    </main>
  )
}

export default PostList
