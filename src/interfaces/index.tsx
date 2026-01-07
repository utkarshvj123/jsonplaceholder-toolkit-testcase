export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostsState {
  items: Post[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
export interface SinglePostState {
  selected: Post | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface PostCardProps {
  post: Post;
}
