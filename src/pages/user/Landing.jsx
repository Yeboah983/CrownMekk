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
      {/* Hero Section */}
      <section
        className="h-[120vh] w-full bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${landingContent.IMAGEURL})` }}
      >
        <div className="absolute inset-0 bg-opacity-1 flex items-center justify-center">
          <div className="text-center text-white px-4 md:px-6">
            <h1 className="text-3xl md:text-6xl font-bold mb-4">{landingContent.HEADING}</h1>
            <p className="text-base md:text-lg mb-6">{landingContent.PARAGRAPH}</p>
            <div className='pt-20'>
            <Link
              to="/shop"
              className="bg-[#5C3C53] px-6 py-3 text-base md:text-lg rounded-lg font-bold hover:bg-[#330b28] transition cursor-pointer inline-block mr-10"
            >
              {landingContent.BUTTON || "Shop Now"}
            </Link>
            <Link
              to="/about"
              className="bg-white px-6 py-3 text-black text-base md:text-lg rounded-lg font-bold hover:bg-[#330b28] transition cursor-pointer inline-block"
            >
              {landingContent.BUTTON2 || "Learn More"}
            </Link> 
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 px-4 md:px-16 bg-[#F5EDE0]">
        <h2 className="text-2xl md:text-3xl font-bold text-[#5C3C53] text-center mb-10">{mainHeading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuredData.map((item, index) => (
            item['ID-HEADING'] && (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={item.IMAGEURL}
                  alt={item['ID-HEADING']}
                  className="w-full aspect-video text-[#5C3C53] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg md:text-xl text-[#5C3C53] font-semibold mb-2">{item['ID-HEADING']}</h3>
                  <p className="text-sm md:text-base text-[#41562A] mb-4">{item.PARAGRAPH}</p>
                  <Link
                    to="/shop"
                    className="text-white bg-[#5C3C53] px-4 py-2 rounded hover:bg-[#330b28] transition inline-block"
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
