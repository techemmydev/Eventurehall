import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NavRoutes } from "../data/NavBarArrays";
import Button from "./Button";
import logo from "../assets/img/logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  function isActive(routes) {
    return location.pathname === routes;
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md flex justify-center">
      <div className="flex justify-between items-center container px-6 py-3 lg:h-[80px]">
        {/* Logo */}
        <div className="text-black text-4xl font-bold lg:text-3xl font-sansita-swashed cursor-pointer flex items-center gap-2">
          <img src={logo} alt="logo" />
          <span className="hidden lg:flex">Eventure hall</span>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#5833F1] focus:outline-none z-50 p-2.5"
        >
          {isOpen ? <X size={45} /> : <Menu size={45} />}
        </button>

        {/* Navigation Links - Desktop */}
        <ul className="hidden lg:flex items-center gap-6">
          {NavRoutes.map((route) => (
            <li key={route.path}>
              <Link
                to={route.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg transition-colors duration-300 ${
                  isActive(route.path)
                    ? "text-[#5833F1] font-extrabold"
                    : "text-black hover:text-sky-700"
                } font-plus-jakarta-sans lg:text-[17px] font-medium`}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Button - Desktop */}
        <Link to={"/book"} className="hidden lg:flex">
          <Button className="hidden lg:block bg-[#5833F1] hover:bg-sky-700 w-[150px] h-[50px] text-white px-4 py-2 rounded-lg transition cursor-pointer font-light font-plus-jakarta-sans">
            Book Now
          </Button>
        </Link>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen bg-sky-800 flex flex-col items-center justify-center space-y-6 z-50 gap-6"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={45} />
            </button>

            {NavRoutes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                onClick={() => setIsOpen(false)}
                className={`text-2xl transition-colors duration-300 ${
                  isActive(route.path)
                    ? "text-white font-bold"
                    : "text-gray-300 hover:text-white"
                } font-plus-jakarta-sans`}
              >
                {route.label}
              </Link>
            ))}

            {/* Mobile Button */}
            <Link to="/book" onClick={() => setIsOpen(false)}>
              <Button className="bg-[#5833F1] hover:bg-sky-700 w-[150px] h-[50px] text-white px-4 py-2 rounded-lg transition cursor-pointer font-light font-plus-jakarta-sans">
                Book Now
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
