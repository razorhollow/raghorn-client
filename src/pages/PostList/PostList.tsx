import { useState } from "react"
import PostCard from "../../components/PostCard/PostCard";

//components
import BottomNav from "../../components/BottomNav/BottomNav";

//style

//types
import { Post, Category } from '../../types/models'
interface PostlistProps {
  posts: Post[] | null;
  categories: Category[] | null;
}

const PostList = (props: PostlistProps) => {
  return (
    <>
      <main style={{marginBottom: '80px'}}>
        {props.posts?.map((post) => (
          <PostCard post={post} key={post.id}/>
        ))}
      </main>
      <BottomNav categories={props.categories}/>
    </>
  )
}

export default PostList
