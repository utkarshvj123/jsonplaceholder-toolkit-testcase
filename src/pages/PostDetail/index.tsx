import React, { useEffect } from "react";
import { Link, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchSinglePost } from "../../features/posts/detailPostSlice";
import { AppDispatch, RootState } from "../../redux/store";

const PostDetail = () => {
  const { postId = "" } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const selected = useSelector(
    (state: RootState) => state.singlePostDetail.selected
  );
  useEffect(() => {
    dispatch(fetchSinglePost(postId));
  }, []);
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Link to="/posts" className="text-blue-600 hover:underline mb-4 block">
        ← Back to Posts
      </Link>
      <h1 className="text-4xl font-bold text-gray-800 mb-3">
        {selected?.title}
      </h1>
      <p className="text-gray-700">{selected?.body}</p>
    </div>
  );
};
export default PostDetail;
