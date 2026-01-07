import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchPosts } from "../../features/posts/postsSlice";
import PostCard from "../../components/PostCard";

const PostPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items = [], status } = useSelector((state: RootState) => state.posts);
  useEffect(() => {
    if (status === "idle") dispatch(fetchPosts());
  }, [status, dispatch]);
  return (
    <div className="grid grid-cols-3 gap-4">
      {status === "succeeded" && items?.map((data) => <PostCard post={data} />)}
    </div>
  );
};
export default PostPage;
