//services
import * as tokenService from "./tokenService"

//types
import { Post } from '../types/models'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/posts`

async function index(): Promise<Post[]> {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json() as Post[]
  } catch (error) {
    throw error
  }
}

async function createPost(post: Partial<Post>): Promise<Post> {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenService.getToken()}`,
      },
      body: JSON.stringify(post),
    });

    if (!res.ok) {
      throw new Error('Failed to create post');
    }

    const createdPost = await res.json() as Post;
    return createdPost;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
}

async function deletePost(postId: number): Promise<void> {
  try {
    const deletedPost = await fetch(`${BASE_URL}/${postId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
      }
    })
  } catch (error) {
    console.error('Error deleting post:', error)
  }
}

export { index, createPost, deletePost }