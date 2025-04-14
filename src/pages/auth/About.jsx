import React, { useState, useEffect } from 'react';
import useGoogleSheetData from '../../services/useGoogleSheetData'; 
import { Link } from 'react-router';

const About = () => {
  const tabName = 'ABOUTUS';
  const range = 'A1:D100'; 
  const { data, error } = useGoogleSheetData(tabName, range);

  // Default content
  const defaultContent = { HEADLINE: '', PARAGRAPH: '', CTA: '', BGURL: '' };
  const content = data && data.length > 0 ? data[0] : defaultContent;

  // Use useState for smooth fade-in effect
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (data && data.length > 0) {
      setIsLoaded(true); // Trigger fade-in effect once the data is ready
    }
  }, [data]);

  return (
    <div
      className={`min-h-screen bg-cover bg-center flex items-center justify-center px-6 py-16 text-white transition-opacity duration-1000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        backgroundImage: `url(${
          content.BGURL.includes("drive.google.com")
            ? `https://drive.google.com/uc?export=view&id=${
                content.BGURL.match(/\/d\/(.+?)\//)?.[1]
              }`
            : content.BGURL
        })`,
      }}
    >
      <div className="bg-transparent bg-opacity-1 p-8 rounded-2xl text-center">
        <h1 className="text-3xl text-white md:text-4xl font-bold mb-4 md:px-6">{content.HEADLINE}</h1>
        <p className="text-base text-white md:text-lg mb-6">{content.PARAGRAPH}</p>
        <Link
          to="/shop"
          className="inline-block bg-[#BD701A] text-black px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-200 transition"
        >
          {content.CTA || "Shop Now"}
        </Link>
      </div>
    </div>
  );
}

export default About;
