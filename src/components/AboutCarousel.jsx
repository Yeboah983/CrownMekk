import React, { useRef } from 'react';

const AboutCarousel = ({ images }) => {
  const scrollRef = useRef(null);

  const validImages = images || [];

  console.log("Carousel images received:", validImages);

  return (
    <section className="bg-[#F3F4F6] py-10 px-4">
      <div className="flex flex-col items-center">
              <h2 className="text-3xl text-[#5C3C53] font-bold text-center m-0 leading-none">
                Explore More
              </h2>
              <div className="w-20 h-1 bg-[#5C3C53] mt-1 rounded"></div>
            </div>

      <div className="flex flex-wrap gap-6 justify-center px-1 pt-10">
        {(validImages.length ? validImages : [
          {
            LOGO: "https://placehold.co/100x100?text=BHB",
            TITLE: "Sample Product",
            SUBTITLE: "This is a sample subtitle.",
            BENEFIT1: "Helps with something useful.",
            BENEFIT2: "Great for daily use.",
            BENEFIT3: "Reduces inflammation.",
            BENEFIT4: "Soothes skin and nerves."
          }
        ]).map((item, index) => {
          const baseBenefits = [
            item.BENEFIT1 && `✔ ${item.BENEFIT1}`,
            item.BENEFIT2 && `✔ ${item.BENEFIT2}`
          ].filter(Boolean);

          const extraBenefits = [
            item.BENEFIT3 && `✔ ${item.BENEFIT3}`,
            item.BENEFIT4 && `✔ ${item.BENEFIT4}`
          ].filter(Boolean);

          return (
            <div
              key={index}
              className="w-full sm:w-[48%] lg:w-[32%] transform transition duration-300 hover:scale-105 flex flex-col items-start justify-start bg-white p-5 rounded-xl shadow min-h-[420px]"
            >
              <div className="w-full flex flex-row items-start gap-4 mb-4">
                <img
                  src={item.LOGO ? item.LOGO : 'https://placehold.co/100x100?text=BHB'}
                  alt={`Logo ${index + 1}`}
                  className="w-16 h-16 object-contain rounded-full"
                />
                <div className="flex flex-col justify-center w-full">
                  <h2 className="text-2xl font-bold text-red-700 mb-1 leading-tight">{item.TITLE || "Missing Title"}</h2>
                  <p className="text-green-700 text-lg font-medium leading-snug mb-1">{item.SUBTITLE || "Missing Subtitle"}</p>
                  <hr className="border-t-2 border-green-700 w-full" />
                </div>
              </div>

              {baseBenefits.length > 0 && (
                <div className="text-base text-gray-800 w-full">
                  <h5 className="font-bold text-black mb-2">What It Does</h5>
                  {baseBenefits.map((text, i) => (
                    <p key={i} className="mb-2 leading-snug">{text}</p>
                  ))}
                </div>
              )}

              {item.TITLE === 'Benzura Herbal Balm' && extraBenefits.length > 0 && (
                <div className="text-base text-gray-800 w-full mt-4">
                  <h5 className="font-bold text-black mb-2">Skin & Wound Care</h5>
                  {extraBenefits.map((text, i) => (
                    <p key={`extra-${i}`} className="mb-2 leading-snug">{text}</p>
                  ))}
                </div>
              )}

              {item.TITLE !== 'Benzura Herbal Balm' && extraBenefits.length > 0 && (
                <div className="text-base text-gray-800 w-full mt-4">
                  {extraBenefits.map((text, i) => (
                    <p key={`extra-${i}`} className="mb-2 leading-snug">{text}</p>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutCarousel;
