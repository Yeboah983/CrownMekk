import React from 'react';
import useGoogleSheetData from '../../services/useGoogleSheetData'; 
import { Link } from 'react-router';

const Blog = () => {
  const tabName = 'BLOG';
  const range = 'A1:D100'; 
  const { data, error } = useGoogleSheetData('BLOG', 'A1:E100');

  // Default content
  const defaultContent = { ID: '', TITLE: '', CONTENT: '', DATEPUBLISHED: '', FULLBLOG: '' };
  const content =
    data && data.length > 0 ? data : [defaultContent]; // Adjusted to map all posts

  return (
    <div className="min-h-screen bg-[#f0c89c] py-16 px-6 pt-25">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-10 text-[#a65a14]">Our Blog</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.map((post) => (
          <div
            key={post.ID}
            className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{post.TITLE}</h2>
            
            <p className="text-base text-gray-700 mb-6">{post.CONTENT}</p>
            <Link
              to={`/blog/${post.ID}`}
              className="inline-block bg-[#BD701A] text-white px-6 py-2 rounded-xl text-sm font-semibold hover:bg-[#a65a14] transition"
            >
              Read More
            </Link>
            <p className="text-sm text-gray-600 mb-4 pt-5">{post.DATEPUBLISHED}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
