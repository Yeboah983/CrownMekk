import React, { useRef } from 'react';

const AboutCarousel = ({ images }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#f0c89c] py-10 px-4">
      <h3 className="text-2xl font-bold text-center mb-6">Explore More</h3>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white text-[#BD701A] p-2 rounded-full shadow hover:bg-[#a65a14] hover:text-white transition"
        >
          &#8592;
        </button>

        {/* Scrollable Container */}
        <div
  ref={scrollRef}
  className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth px-1"
>
  {images.map((item, index) => (
    <div
  key={index}
  className="min-w-[90%] sm:min-w-[48%] lg:min-w-[32%] snap-start transform transition duration-300 hover:scale-105 flex items-center justify-center h-[400px]" // 👈 Fixed height
>
  <img
    src={item.IMAGEURL}
    alt={`Product ${index + 2}`}
    className="max-h-full w-auto object-contain"
  />
</div>
  ))}
</div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-[#BD701A] p-2 rounded-full shadow hover:bg-[#a65a14] hover:text-white transition"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default AboutCarousel;
