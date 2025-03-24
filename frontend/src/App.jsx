import React, { useEffect, useRef, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router";
import logo from "./assets/img/logo.png";
import Layout from "./layout/Layout";
import Home from "./pages/Homepage";
import PagenotFound from "./pages/PagenotFound";
import ContactForm from "./pages/ContactForm ";
import BookingPage from "./pages/BookingPage";
import Servicepage from "./pages/Servicepage";
import GalleryPage from "./pages/GalleryPage";
import "./App.css";
import { motion } from "framer-motion";
import BookingForm from "./components/BookingForm";
import Aboutuspage from "./pages/Aboutuspage";
import CookieConsent from "./components/CookieConsent";
const App = () => {
  const clipboardSectionRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [loading, setLoading] = useState(true); // Loading state

  // Simulate website loading (e.g., fetch data, API calls)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Hide loading screen after 2.5 seconds
    }, 2500);
  }, []);

  // Detect scroll direction (up or down)
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      setScrollDirection(window.scrollY > lastScrollY ? "down" : "up");
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Show loading screen before displaying content */}
      {loading ? (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white z-50">
          {/* Loader Animation */}
          <motion.img
            src={logo}
            alt="logo"
            className="w-20 h-20"
            animate={{ opacity: [0, 1, 0] }} // Keyframes: fade in, then fade out
            transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
          />
        </div>
      ) : (
        <>
          <div
            className="relative"
            ref={clipboardSectionRef}
            id="clipboardSection"
          >
            {/* Floating Scroll Button */}
            <button
              onClick={() =>
                clipboardSectionRef.current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
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

            {/* Website Content */}
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
          </div>

          {/* Cookie Consent appears after loading */}
          <CookieConsent />
        </>
      )}
    </>
  );
};
export default App;
