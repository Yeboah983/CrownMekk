import React, { useState, useEffect } from 'react';
import useGoogleSheetData from '../../services/useGoogleSheetData';
import { Link } from 'react-router'; // fixed import

const About = () => {
  // Fetch data from both sheets
  const { data: aboutData, error: aboutError } = useGoogleSheetData("ABOUTUS", "A1:D100");
  const { data: productData, error: productError } = useGoogleSheetData("ABOUTPRODUCT", "A1:D100");

  const defaultContent = { HEADLINE: '', PARAGRAPH: '', CTA: '', BGURL: '' };
  const about = aboutData && aboutData.length > 0 ? aboutData[0] : defaultContent;
  const products = productData || [];

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (aboutData && aboutData.length > 0) {
      setIsLoaded(true);
    }
  }, [aboutData]);

  return (
    <>
      {/* HERO SECTION FROM ABOUTUS */}
      <div
        className={`min-h-screen bg-cover bg-center flex items-center justify-center px-6 py-16 text-white transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url(${
            about.BGURL?.includes("drive.google.com")
              ? `https://drive.google.com/uc?export=view&id=${
                  about.BGURL.match(/\/d\/(.+?)\//)?.[1]
                }`
              : about.BGURL
          })`,
        }}
      >
        <div className="bg-transparent bg-opacity-1 p-8 rounded-2xl text-center">
          <h1 className="text-3xl text-white md:text-4xl font-bold mb-4 md:px-6">{about.HEADLINE}</h1>
          <p className="text-base text-white md:text-lg mb-6">{about.PARAGRAPH}</p>
          <Link
            to="/shop"
            className="inline-block bg-[#BD701A] text-black px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-200 transition"
          >
            {about.CTA || "Shop Now"}
          </Link>
        </div>
      </div>

      {/* ABOUT PRODUCTS SECTION FROM ABOUTPRODUCT */}
      {products.length > 0 && (
        <section className="py-16 px-6 bg-white text-black">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src={products[0].IMAGEURL}
                alt={products[0].TITLE}
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-3xl font-bold mb-4">{products[0].TITLE}</h2>
              <p className="text-2xl md:text-lg leading-relaxed">{products[0].SUMMARY}</p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default About;