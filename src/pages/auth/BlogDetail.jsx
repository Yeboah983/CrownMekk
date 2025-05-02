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

  const formatParagraphs = (text) => {
    return text.split('\n').map((line, idx) => {
      if (line.startsWith('•') || line.startsWith('-')) {
        return (
          <li key={idx} className="ml-6 list-disc mb-2">
            {line.slice(1).trim()}
          </li>
        );
      } else if (line.match(/^\d+\./)) {
        return (
          <li key={idx} className="ml-4 list-disc mb-1">
  {line.slice(1).trim()}
</li>

        );
      } else if (line.trim() === '') {
        return <br key={idx} />;
      } else if (line.toLowerCase().includes('what it does')) {
        return <h3 key={idx} className="text-xl font-semibold text-[#5C3C53] mt-6 mb-2">What It Does</h3>;
      } else if (line.toLowerCase().includes('how to use')) {
        return <h3 key={idx} className="text-xl font-semibold text-[#5C3C53] mt-6 mb-2">How to Use</h3>;
      } else if (line.toLowerCase().includes('ideal for')) {
        return <h3 key={idx} className="text-xl font-semibold text-[#5C3C53] mt-6 mb-2">Ideal For</h3>;
      } else if (line.toLowerCase().includes('visible results')) {
        return <h3 key={idx} className="text-xl font-semibold text-[#5C3C53] mt-6 mb-2">Visible Results</h3>;
      } else if (line.toLowerCase().includes('you’re not alone')) {
        return <h3 key={idx} className="text-xl font-semibold text-[#5C3C53] mt-6 mb-2">You’re Not Alone</h3>;
      } else {
        return <p key={idx} className="mb-4">{line}</p>;
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#F5EDE0] px-4 py-8 sm:px-6 sm:py-16">
      {/* Optional Image */}
      {post.IMAGEURL && (
        <img
          src={post.IMAGEURL}
          alt={post.TITLE}
          className="w-full h-94 object-cover rounded-lg mb-6 pt-7"
        />
      )}

      {/* Blog Title */}
      <h1 className="text-2xl sm:text-4xl font-bold text-[#5C3C53] mb-2">{post.TITLE}</h1>
<p className="text-gray-600 text-sm mb-4">
  Author: {post.AUTHOR} &nbsp;|&nbsp; Published on: {post.DATEPUBLISHED}
</p>

      {/* Blog Content */}
      <div className="text-base sm:text-lg text-gray-800 leading-relaxed text-left sm:text-justify whitespace-pre-line mb-10">

  {formatParagraphs(post.FULLBLOG)}
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
