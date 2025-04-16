import React, { useState, useEffect } from 'react';
import useGoogleSheetData from '../../services/useGoogleSheetData';
import { Link } from 'react-router';
import AboutCarousel from "../../components/AboutCarousel";

const About = () => {
  const { data: aboutData } = useGoogleSheetData("ABOUTUS", "A1:D100");
  const { data: productData } = useGoogleSheetData("ABOUTPRODUCT", "A1:D100");

  const defaultContent = { HEADLINE: '', PARAGRAPH: '', CTA: '', BGURL: '' };
  const about = aboutData && aboutData.length > 0 ? aboutData[0] : defaultContent;
  const products = productData || [];
  const carouselImages = products.slice(1);

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (aboutData && aboutData.length > 0) setIsLoaded(true);
  }, [aboutData]);

  return (
    <>
      {/* HERO SECTION */}
      <div className={`h-screen relative flex flex-col transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Top Half - Image (40% height) */}
        <div className="w-full h-[60vh]">
          <img
            src={
              about.BGURL?.includes("drive.google.com")
                ? `https://drive.google.com/uc?export=view&id=${about.BGURL.match(/\/d\/(.+?)\//)?.[1]}`
                : about.BGURL
            }
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Half - Text (60% height) */}
        <div className="h-[60vh] w-full flex items-center justify-center px-6 py-8 bg-[#6d4d29] text-white">
          <div className="text-center max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{about.HEADLINE}</h1>
            <p className="text-base md:text-lg mb-6">{about.PARAGRAPH}</p>
            <Link
              to="/shop"
              className="inline-block bg-[#BD701A] text-black px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-200 transition"
            >
              {about.CTA || "Shop Now"}
            </Link>
          </div>
        </div>
      </div>

      {/* ABOUT PRODUCT SECTION */}
      {products.length > 0 && (
        <section className="py-16 px-6 bg-white text-black">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <img
                src={products[0].IMAGEURL}
                alt={products[0].TITLE}
                className="w-full max-h-[500px] object-contain rounded-lg shadow-md transform transition duration-300 hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">{products[0].TITLE}</h2>
              <p className="text-lg leading-relaxed">{products[0].SUMMARY}</p>
            </div>
          </div>
        </section>
      )}

      {/* IMAGE CAROUSEL */}
      {carouselImages.length > 0 && (
        <AboutCarousel images={carouselImages} />
      )}
    </>
  );
};

export default About;
