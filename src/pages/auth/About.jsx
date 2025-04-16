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
      {/* HERO SECTION with Overlay and Text on Image */}
<div className={`relative w-full h-[350px] md:h-[500px] transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src={
        about.BGURL?.includes("drive.google.com")
          ? `https://drive.google.com/uc?export=view&id=${about.BGURL.match(/\/d\/(.+?)\//)?.[1]}`
          : about.BGURL
      }
      alt="Hero"
      className="w-full h-full object-cover"
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-black opacity-60"></div>
  </div>

  {/* Text on Top */}
  <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-white text-center">
    <h1 className="text-3xl pt-10 md:text-5xl font-bold mb-4">{about.HEADLINE}</h1>
    <p className="text-base md:text-lg max-w-2xl mb-6">{about.PARAGRAPH}</p>
    <Link
      to="/shop"
      className="bg-[#BD701A] text-black px-6 py-3 rounded-xl text-sm font-semibold hover:bg-white transition"
    >
      {about.CTA || "Shop Now"}
    </Link>
  </div>
</div>


      {/* ABOUT PRODUCT SECTION */}
      {products.length > 0 && (
  <section className="py-16 px-6 bg-white text-black">
    <div className="max-w-6xl mx-auto flex flex-col gap-8">

      {/* Title Centered at the Top */}
      <h2 className="text-3xl font-bold text-center">{products[0].TITLE}</h2>

      {/* Content Layout */}
      <div className="flex flex-col md:flex-row gap-8 items-center">
        
        {/* Image */}
        <div className="w-full md:w-1/2">
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src={products[0].IMAGEURL}
              alt={products[0].TITLE}
              className="w-full h-[350px] object-cover transition duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <p className="text-lg leading-loose">{products[0].SUMMARY}</p>
        </div>
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
