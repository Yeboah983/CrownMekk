// src/pages/BlogDetail.jsx
import React from 'react';
import { useParams } from 'react-router';
import useGoogleSheetData from '../../services/useGoogleSheetData';

const BlogDetail = () => {
  const { id } = useParams();
  const { data } = useGoogleSheetData('BLOG', 'A1:E100');

  const post = data?.find((item) => item.ID === id);

  if (!post) {
    return (
      <div className="p-10">
        <h2 className="text-2xl font-bold text-red-600">Blog post not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fdf9f6] py-16 px-6 pt-30">
      <h1 className="text-6xl font-bold text-[#a65a14] mb-6 justify-center">{post.TITLE}</h1>
      <p className="text-gray-600 text-sm mb-4">Published on: {post.DATEPUBLISHED}</p>
      <div className="text-lg leading-relaxed text-gray-800">
        {post.FULLBLOG}
      </div>
    </div>
  );
};

export default BlogDetail;
