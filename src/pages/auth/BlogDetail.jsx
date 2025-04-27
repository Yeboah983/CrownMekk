import React from 'react';
import { useParams, Link } from 'react-router';
import useGoogleSheetData from '../../services/useGoogleSheetData';

const BlogDetail = () => {
  const { id } = useParams();
  const { data } = useGoogleSheetData('BLOG', 'A1:G100');
  const post = data?.find((item) => item.ID === id);

  if (!post) {
    return (
      <div className="p-10">
        <h2 className="text-2xl font-bold text-red-600">Blog post not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5EDE0] py-16 px-6">
      {/* Optional Image */}
      {/* {post.IMAGEURL && (
        <img
          src={post.IMAGEURL}
          alt={post.TITLE}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      )} */}

      {/* Blog Title */}
      <h1 className="text-4xl font-bold text-[#5C3C53] mb-4 pt-7">{post.TITLE}</h1>
      <p className="text-gray-600 text-sm mb-8">
        Author: {post.AUTHOR} &nbsp;|&nbsp; Published on: {post.DATEPUBLISHED}
      </p>

      {/* Blog Content */}
      <div className="text-lg text-gray-800 leading-relaxed text-justify whitespace-pre-line mb-8">
        {post.FULLBLOG}
      </div>

      {/* Back Button */}
      <Link
        to="/blog"
        className="inline-block bg-[#5C3C53] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#a65a14] transition"
      >
        ← Back to Blog
      </Link>
    </div>
  );
};

export default BlogDetail;
