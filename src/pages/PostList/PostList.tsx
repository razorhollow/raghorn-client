import { useState } from "react"
import PostCard from "../../components/PostCard/PostCard";

//components
import BottomNav from "../../components/BottomNav/BottomNav";

//style

//types
import { Post } from '../../types/models'
interface PostlistProps {
  posts: Post[] | null;
}

const PostList = (props: PostlistProps) => {
  return (
    <>
      <main style={{marginBottom: '80px'}}>
        {props.posts?.map((post) => (
          <PostCard post={post} key={post.id}/>
        ))}
      </main>
      <BottomNav />
    </>
  )
}

export default PostList
