import React, { useState, useEffect } from "react";
import useGoogleSheetData from "../../services/useGoogleSheetData";
import { Link } from "react-router";
import AboutCarousel from "../../components/AboutCarousel";

const About = () => {
  const { data: aboutData } = useGoogleSheetData("ABOUTUS", "A1:D100");
  const { data: summaryData } = useGoogleSheetData("SUMMARY", "A1:D100");
  const { data: productData } = useGoogleSheetData("ABOUTPRODUCT", "A1:H100");

  const defaultContent = { HEADLINE: "", PARAGRAPH: "", CTA: "", BGURL: "" };
  const about = aboutData?.[0] || defaultContent;
  const summary = summaryData?.[0] || null;
  const carouselImages = productData || [];

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (aboutData?.length > 0) setIsLoaded(true);
  }, [aboutData]);

  const getDriveImage = (url) => {
    if (!url) return "";
    const match = url.match(/\/d\/(.+?)\//);
    return match
      ? `https://drive.google.com/uc?export=view&id=${match[1]}`
      : url;
  };

  // 🔍 Debug logs
  console.log("Raw productData from ABOUTPRODUCT:", productData);
  console.log("carouselImages:", carouselImages);
  console.log("Loaded headline:", about.HEADLINE);

  return (
    <>
      {/* HERO SECTION */}
      <div
        className={`relative w-full min-h-[400px] md:min-h-[500px] transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          {about.BGURL ? (
            <img
              src={getDriveImage(about.BGURL)}
              alt="Hero"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-[#ccc]"></div>
          )}
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 py-12 sm:py-16 md:py-24 text-white">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug break-words pt-16 mb-4 max-w-xl">
            {about.HEADLINE || "About CrownMekk"}
          </h1>

          <p className="text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed mb-6">
            {about.PARAGRAPH}
          </p>

          <Link
            to="/shop"
            className="bg-[#5C3C53] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-white hover:text-[#5C3C53] transition"
          >
            {about.CTA || "Shop Now"}
          </Link>
        </div>
      </div>

      {/* SUMMARY SECTION */}
      {summary && (
        <section className="py-16 px-6 bg-[#F3F4F6] text-[#5C3C53]">
          <div className="max-w-6xl mx-auto flex flex-col gap-8">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl font-bold text-center m-0 leading-none">
                {summary.TITLE}
              </h2>
              <div className="w-45 h-1 bg-[#5C3C53] mt-1 rounded"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img
                    src={summary.IMAGEURL}
                    alt={summary.TITLE}
                    className="w-full h-[350px] object-cover transition duration-300 hover:scale-105"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <p className="text-lg text-[#41562A] leading-loose">
                  {summary.SUMMARY}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* IMAGE CAROUSEL SECTION */}
      <AboutCarousel images={carouselImages} />
    </>
  );
};

export default About;
