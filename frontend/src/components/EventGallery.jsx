import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import image1 from "../assets/img/luxurious-dinner-hall-with-large-crystal-chandelier.png";
import image2 from "../assets/img/close-up-champagne-bottle-with-pink-balloons-desk.png";
import image3 from "../assets/img/rich-christal-chandelier-hangs-dinner-table-with-red-roses-greenery.png";
import image4 from "../assets/img/beautiful-pink-decorated-wedding-serving-with-centerpiece-lightening-candles.png";

const EventGallery = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <section className="bg-black text-white py-12 font-plus-jakarta-sans">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Event Highlights</h2>
          <p className="text-gray-400 mt-2">
            Explore our memorable events captured in stunning visuals.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          {[image1, image2, image3, image4].map((img, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <img
                src={img}
                alt={`Event ${index + 1}`}
                className="w-full h-[200px] sm:w-[400px] sm:h-[250px] md:w-[500px] md:h-[300px] lg:w-full lg:h-[350px] object-center object-contain rounded-lg"
              />
            </SwiperSlide>
          ))}

          {/* Autoplay Progress Circle */}
          <div className="autoplay-progress absolute bottom-4 right-4 text-white">
            <svg viewBox="0 0 48 48" ref={progressCircle} className="w-8 h-8">
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="white"
                strokeWidth="3"
                fill="none"
              ></circle>
            </svg>
            <span
              ref={progressContent}
              className="absolute inset-0 flex items-center justify-center text-sm"
            ></span>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default EventGallery;
