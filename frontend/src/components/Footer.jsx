import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapLocation,
} from "react-icons/fa6";
import logo from "../assets/img/logo.png";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 font-plus-jakarta-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About the Venue */}
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-indigo-400 text-2xl font-bold">
                <img src={logo} alt="companylogo" />
              </span>
              <h3 className="text-white font-semibold text-lg font-sansita-swashed">
                Eventure hall
              </h3>
            </div>
            <p className="mt-4 text-sm">
              A premier event venue offering luxurious spaces for weddings,
              corporate events, and special occasions.
            </p>
            {/* Social Media Icons */}
            <div className="mt-4 flex space-x-4">
              <FaFacebookF className="hover:text-white cursor-pointer" />
              <FaInstagram className="hover:text-white cursor-pointer" />
              <FaXTwitter className="hover:text-white cursor-pointer" />
              <FaYoutube className="hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Venue Services */}
          <div>
            <h3 className="text-white font-semibold font-plus-jakarta-sans">
              Our Services
            </h3>
            <ul className="mt-4 space-y-2">
              <li>Wedding Receptions</li>
              <li>Corporate Events</li>
              <li>Birthday Parties</li>
              <li>Concerts & Shows</li>
              <li>Banquet Catering</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-semibold font-plus-jakarta-sans">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center space-x-2">
                <FaMapLocation />
                <span>federal civil service club 1,</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone />
                <span>+234-813-942-1920</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope />
                <span>info@h2allevents.com</span>
              </li>
            </ul>
          </div>

          {/* Legal Information */}
          <div>
            <h3 className="text-white font-semibold font-plus-jakarta-sans">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Event Booking Policy</li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        {/* Copyright Section */}
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} EventureHall. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
