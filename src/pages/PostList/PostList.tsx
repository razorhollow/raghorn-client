import { useState, useEffect } from "react";
import PostCard from "../../components/PostCard/PostCard";

// components
import BottomNav from "../../components/BottomNav/BottomNav";

// types
import { Post, Category, User } from "../../types/models";
interface PostlistProps {
  posts: Post[] | null;
  categories: Category[] | null;
  user: User | null;
  handleNewPost: (newPost: Post) => void;
  handleDeletePost: (id: number) => void
}

const PostList = (props: PostlistProps) => {

  useEffect(()=> {
    console.log("PostListProps:", props)
  })

  return (
    <>
      <main style={{ marginBottom: "80px" }}>
        {Array.isArray(props.posts) && props.posts?.map((post) => (
          <PostCard post={post} key={post.id} handleDeletePost={props.handleDeletePost} user={props.user}/>
        ))}
      </main>
      <BottomNav categories={props.categories} user={props.user} handleNewPost={props.handleNewPost} />

    </>
  );
};

export default PostList;
