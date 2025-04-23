import React from 'react';
import useGoogleSheetData from '../../services/useGoogleSheetData'; 
import { Link } from 'react-router';

const LandingPage = () => {
  const { data: landingData, error: landingError } = useGoogleSheetData("LANDINGPAGE", "A1:G100");
  const { data: featuredData, error: featuredError } = useGoogleSheetData("FEATUREDPAGE", "A1:G100");

  if (landingError || featuredError) return <p>Error loading content.</p>;
  if (!landingData || !featuredData) return <p>Loading...</p>;

  const landingContent = landingData.find(item => item.SECTIONTYPE?.toLowerCase() === "landing") || {};
  const mainHeading = featuredData[0]?.['MAINHEADING'] || "Featured Products";

  return (
   <div className="pt-16">
  <section
    className="w-full relative bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url(${landingContent.IMAGEURL})`,
      minHeight: '500px', // 👈 Extend height for mobile here
    }}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

    {/* Content */}
    <div className="absolute inset-0 flex flex-col justify-between items-center text-white px-4 pb-8 pt-10 z-10">
      {/* Heading & paragraph */}
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">{landingContent.HEADING}</h1>
        <p className="text-sm md:text-base max-w-md mx-auto">{landingContent.PARAGRAPH}</p>
      </div>

      {/* Buttons at bottom */}
      <div className="flex gap-4 mt-4 flex-wrap justify-center">
        <Link
          to="/shop"
          className="bg-[#5C3C53] px-4 py-2 text-sm rounded-lg font-semibold hover:bg-[#3b3227] transition"
        >
          {landingContent.BUTTON || "Shop Now"}
        </Link>
        <Link
          to="/about"
          className="bg-white text-[#5C3C53] px-4 py-2 text-sm rounded-lg font-semibold hover:bg-[#BD701A] hover:text-white transition"
        >
          {landingContent.BUTTON2 || "Learn More"}
        </Link>
      </div>
    </div>
  </section>





      {/* Featured Section */}
      <section className="py-16 px-4 md:px-16 bg-gray-100">
      <div className="flex flex-col items-center">
              <h2 className="text-3xl text-[#5C3C53] font-bold text-center m-0 leading-none">
                {mainHeading}
              </h2>
              <div className="w-45 h-1 bg-[#5C3C53] mt-1 rounded mb-10"></div>
            </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuredData.map((item, index) => (
            item['ID-HEADING'] && (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={item.IMAGEURL}
                  alt={item['ID-HEADING']}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{item['ID-HEADING']}</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4">{item.PARAGRAPH}</p>
                  <Link
                    to="/shop"
                    className="text-white bg-[#5C3C53] px-4 py-2 rounded hover:bg-blue-800 transition inline-block"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            )
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
