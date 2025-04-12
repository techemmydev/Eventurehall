import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "./Button";
import { ReactTyped } from "react-typed";
// Import Low-Quality Placeholder Images (Optional for better UX)
import placeholder from "../assets/img/heroimage6.avif"; // A very small low-res image
import heroimage1 from "../assets/img/picture1.jpg";
import heroimage2 from "../assets/img/picture2.jpg";
import heroimage3 from "../assets/img/picture3.jpg";
import heroimage4 from "../assets/img/picture4.jpg";
import heroimage7 from "../assets/img/picture5.jpg";
import { Link } from "react-router";

const images = [heroimage1, heroimage2, heroimage3, heroimage4, heroimage7];

const Herosection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState(
    Array(images.length).fill(false) // Track loaded state for each image
  );

  // Change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Mark an image as loaded when it's fully downloaded
  const handleImageLoad = (index) => {
    setLoadedImages((prev) => {
      const updated = [...prev];
      updated[index] = true;
      // console.log(updated);
      return updated;
    });
  };

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden lg:h-[650px]">
      {/* Static Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-white bg-black opacity-70 text-lg font-bold z-10 px-4">
        <div
          className="w-5/5 lg:w-[800px] text-center mt-8"
          data-aos="fade-right"
        >
          {/* Display this on mobile screens */}
          <h1 className="block sm:hidden text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-poppins">
            Welcome to Eventure Hall
          </h1>
          {/* Display Typed.js animation on larger screens */}
          <ReactTyped
            strings={[
              "A stunning space for unforgettable events",
              "Seamless experiences with premium amenities",
              "Where every occasion becomes extraordinary",
              "Celebrate in style with elegance and comfort",
              "Creating memories that last a lifetime",
              "A venue designed to inspire and impress",
            ]}
            typeSpeed={50}
            backSpeed={50}
            backDelay={2000}
            loop
            showCursor
            cursorChar="|"
            className="hidden sm:block text-xl sm:text-2xl lg:text-4xl font-bold leading-tight font-poppins"
          />
          {/* <h1 className="text-xl sm:text-2xl lg:text-5xl font-bold leading-tight font-poppins"">
            Welcome to Eventure Hall
          </h1> */}

          <p className="hidden sm:block text-[18px] lg:text-2xl font-light leading-7 lg:leading-10 font-poppins mb-6 lg:mb-10">
            Discover the perfect venue for your next event. Our event center
            offers versatile spaces, modern amenities, and exceptional service
            to make your occasion unforgettable.
          </p>

          {/* Buttons */}
          <div className="flex justify-center mt-4 sm:mt-8">
            <Link to={"/book"}>
              <Button className="bg-[#5833F1] hover:bg-sky-700 w-[270px] h-[80px] text-white px-4 py-2 rounded-lg transition cursor-pointer font-light font-plus-jakarta-sans sm:hidden text-[26px]">
                Book for an Event
              </Button>
            </Link>
            <div className="hidden sm:flex gap-6">
              <Link to={"/gallery"}>
                <Button className="bg-[#5833F1] hover:bg-sky-700 w-[150px] h-[50px] text-white px-4 py-2 rounded-lg transition cursor-pointer font-light font-poppins">
                  View Gallery
                </Button>
              </Link>
              <Link to={"/contact"}>
                <Button className="border border-[#5833F1] hover:bg-sky-700 w-[150px] h-[50px] text-white px-4 py-2 rounded-lg transition cursor-pointer font-light font-poppins">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Image Slider with Lazy Loading & Placeholder */}
      <div className="absolute inset-0 w-full h-full transition-opacity duration-1000">
        <img
          src={loadedImages[currentIndex] ? images[currentIndex] : placeholder}
          alt={`Slide ${currentIndex + 1}`}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            loadedImages[currentIndex] ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          onLoad={() => handleImageLoad(currentIndex)}
        />
      </div>
    </div>
  );
};

export default Herosection;
