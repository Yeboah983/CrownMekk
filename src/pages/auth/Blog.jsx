import React from 'react';
import useGoogleSheetData from '../../services/useGoogleSheetData';
import { Link } from 'react-router';

const Blog = () => {
  const { data, error } = useGoogleSheetData('BLOG', 'A1:G100'); // Include IMAGEURL
  const defaultContent = {
    ID: '', TITLE: '', CONTENT: '', DATEPUBLISHED: '', FULLBLOG: '', IMAGEURL: ''
  };
  const content = data && data.length > 0 ? data : [defaultContent];

  return (
    <div className="min-h-screen bg-[#F5EDE0] py-16 px-6">
      <h1 className="text-6xl font-bold text-center pt-6 mb-12 text-[#5C3C53]">Our Blog</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.map((post) => (
          <div
            key={post.ID}
            className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105"
          >
            {post.IMAGEURL && (
              <img
                src={post.IMAGEURL}
                alt={post.TITLE}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.TITLE}</h2>
              <p className="text-[#1c2712] text-sm mb-4">{post.CONTENT}</p>

              <Link
                to={`/blog/${post.ID}`}
                className="inline-block bg-[#5C3C53] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#380b2b] transition"
              >
                Read More
              </Link>

              <p className="text-sm text-gray-500 mt-4">{post.DATEPUBLISHED}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
