import useGoogleSheetData from '../../services/useGoogleSheetData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './testimonial.css';

const TestimonialSection = () => {
  const { data: testimonialsData, error: testimonialsError } = useGoogleSheetData("TESTIMONIES", "A1:E100");

  if (testimonialsError) return <p className="text-center text-red-500">Error loading testimonials.</p>;
  if (!testimonialsData.length) return <p className="text-center">Loading testimonials...</p>;

  return (
    <section className="bg-[#F5EDE0] py-16 px-4 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#5C3C53] uppercase">What Our Clients Say</h2>
        <div className="w-16 h-1 bg-[#5C3C53] mt-2 mx-auto rounded-full"></div>
      </div>

      <div className="relative">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonialsData.map((item, idx) => {
            const rating = Math.min(5, Math.max(0, parseInt(item.RATING || 0)));
            return (
              <SwiperSlide key={idx}>
                <div className="bg-white shadow-xl rounded-xl p-6 max-w-md w-full h-full flex flex-col items-center text-center">
                  <p className="text-lg text-gray-800 italic mb-4 leading-relaxed">
                    “{item.MESSAGE}”
                  </p>

                  {/* Star Ratings */}
                  <div className="flex justify-center mb-4 text-[#BD701A] text-xl gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>{i < rating ? '★' : '☆'}</span>
                    ))}
                    <span className="text-sm text-[#5C3C53] ml-2">({rating}/5)</span>
                  </div>

                  {/* Profile - Centered with name under image */}
                  <div className="flex flex-col items-center mt-auto">
                    <div className="relative group w-24 h-24 mb-2">
  <img
    src={item.IMAGE}
    alt={item.NAME}
    className="rounded-full object-cover border-4 border-[#5C3C53] w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-150 z-10"
  />
</div>

                    <span className="text-[#5C3C53] font-semibold text-lg">{item.NAME}</span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Arrows (hidden on mobile, shown on md+) */}
        <div className="hidden md:block swiper-button-prev-custom absolute left-[-40px] top-[40%] z-10 text-[#5C3C53] text-2xl font-bold cursor-pointer">&#10094;</div>
        <div className="hidden md:block swiper-button-next-custom absolute right-[-40px] top-[40%] z-10 text-[#5C3C53] text-2xl font-bold cursor-pointer">&#10095;</div>
      </div>
    </section>
  );
};

export default TestimonialSection;
