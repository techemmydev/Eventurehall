import React, { useEffect, useRef, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router";

import Layout from "./layout/Layout";
import Home from "./pages/Homepage";
import PagenotFound from "./pages/PagenotFound";
import ContactForm from "./pages/ContactForm ";
import BookingPage from "./pages/BookingPage";
import Servicepage from "./pages/Servicepage";
import GalleryPage from "./pages/GalleryPage";
import "./App.css";

import BookingForm from "./components/BookingForm";
import Aboutuspage from "./pages/Aboutuspage";
import CookieConsent from "./components/CookieConsent";
const App = () => {
  const clipboardSectionRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState("up");

  // Detect scroll direction (up or down)
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (clipboardSectionRef.current) {
      clipboardSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <div className="relative" ref={clipboardSectionRef} id="clipboardSection">
        {/* Floating Scroll Button - Smooth Transition & Direction Detection */}
        <button
          onClick={handleScroll}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg 
                   hover:bg-blue-700 transition-all duration-300 z-50 pointer-events-auto"
        >
          <span className="transition-transform duration-300 transform hover:scale-125">
            {scrollDirection === "down" ? (
              <FaArrowDown size={24} />
            ) : (
              <FaArrowUp size={24} />
            )}
          </span>
        </button>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/book" element={<BookingPage />} />
            <Route path="/bookingform" element={<BookingForm />} />
            <Route path="/service" element={<Servicepage />} />

            <Route path="/aboutus" element={<Aboutuspage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="*" element={<PagenotFound />} />
          </Route>
        </Routes>

        {/* Target Section */}

        {/* <div ref={clipboardSectionRef} id="clipboardSection"></div> */}
      </div>
      <CookieConsent />
    </>
  );
};

export default App;
