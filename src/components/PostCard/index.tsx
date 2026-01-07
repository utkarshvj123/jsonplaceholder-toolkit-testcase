import React from "react";
import { Link } from "react-router-dom";
import { PostCardProps } from "../../interfaces";

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>

      <p className="text-gray-600 mb-4">{post.body.substring(0, 100)}...</p>

      <Link
        to={`/posts/${post.id}`}
        className="block text-center text-white bg-blue-600 hover:bg-blue-700 rounded-md py-2 font-medium"
      >
        Read More
      </Link>
    </div>
  );
};

export default PostCard;
