/* ---------===== custom props ====--------- */



/* ---------===== auth models =====--------- */

export interface Profile {
  name: string;
  photo?: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  name: string;
  email: string;
  profile: { id: number };
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface Post {
  id: number;
  userId: number;
  categoryId: number;
  title: string;
  content: string;
  createdAt: string;
  profile: Profile;
  comments: Comment[];
}

export interface Comment {
  id: number;
  postId: number;
  userId: number;
  comment: string;
  profile: Profile;
}

export interface Category {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;

}
