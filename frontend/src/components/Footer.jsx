import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapLocation,
} from "react-icons/fa6";
import Button from "../components/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import logo from "../assets/img/logo.png";
import { useState } from "react";
// import { Link } from "react-router";
export default function Footer() {
  const [openTerms, setOpenTerms] = useState(false);
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
                <span> +234-902-324-3956</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope />
                <span>eventhallfcsc@gmail.com </span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <button
                  onClick={() => setOpenTerms(true)}
                  className="hover:underline text-left"
                >
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>
        </div>

        <Dialog open={openTerms} onOpenChange={setOpenTerms}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto p-6 font-plus-jakarta-sans">
            <DialogHeader>
              <DialogTitle className="text-lg font-bold">
                Terms & Conditions
              </DialogTitle>
              <DialogDescription className="text-sm text-gray-600 mt-2  font-plus-jakarta-sans">
                Please read the terms and conditions carefully before proceeding
                with your booking. By confirming your reservation, you agree to
                abide by these terms.
              </DialogDescription>
              {/* Removed the automatic <p> from DialogDescription by wrapping contents in a <div> instead */}
              <div className="mt-4 text-sm text-gray-700 space-y-4">
                <h4 className="font-semibold">Rental Package Categories</h4>

                <p>
                  <strong>Basic Hall Space Rental (₦150,000)</strong>
                  <br />
                  Time: 7:00 AM – 7:00 PM
                  <br />
                  Inclusions: Hall space only
                  <br />
                  Exclusions: Chairs, tables, generator, and fans
                </p>

                <p>
                  <strong>Hall with Basic Furniture (₦180,000)</strong>
                  <br />
                  Inclusions: 200 chairs and 20 tables
                  <br />
                  Exclusions: Generator and fans
                </p>

                <p>
                  <strong>Hall with Generator Access Only (₦250,000)</strong>
                  <br />
                  Generator usage: 1:00 PM – 7:00 PM
                  <br />
                  Inclusions: Generator
                  <br />
                  Exclusions: Chairs, tables, and fans
                  <br />
                  Duration: 6 hours only
                </p>

                <p>
                  <strong>Hall with Furniture and Generator (₦350,000)</strong>
                  <br />
                  Inclusions: 200 chairs, 20 tables, and generator (1:00 PM –
                  7:00 PM)
                  <br />
                  Exclusions: Fans
                  <br />
                  Duration: 6 hours only
                </p>

                <p>
                  <strong>Fully Equipped Hall Package (₦500,000)</strong>
                  <br />
                  Includes: 200 chairs, 20 tables, generator (1:00 PM – 7:00
                  PM), and 8 industrial fans
                  <br />
                  Duration: 6 hours only
                </p>

                <p>
                  <strong>Note:</strong> Decorations, bouncers/security, and
                  DJs/live bands are not included but can be arranged
                  separately.
                </p>

                <h4 className="font-semibold">
                  Terms and Conditions of Rental
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>Availability Confirmation:</strong> Confirm
                    availability with the Hall Supervisor before booking.
                  </li>
                  <li>
                    <strong>Category Selection:</strong> Choose the appropriate
                    rental category based on your needs.
                  </li>
                  <li>
                    <strong>Booking Confirmation:</strong> A 75% payment is
                    required to confirm your reservation.
                  </li>
                  <li>
                    <strong>Cancellation Policy:</strong>
                    <ul className="ml-4 list-disc">
                      <li>30 days prior: 15% cancellation fee</li>
                      <li>14 days prior: 20% cancellation fee</li>
                      <li>7 days prior: 25% cancellation fee</li>
                      <li>24 hours prior: 40% cancellation fee</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Pre-Event Inspection:</strong> A mandatory facility
                    walkthrough with the supervisor is required.
                  </li>
                  <li>
                    <strong>Damages Deposit:</strong> A refundable ₦50,000
                    caution fee is due 48 hours before the event.
                  </li>
                  <li>
                    <strong>Post-Event Refund:</strong> The caution fee will be
                    refunded in full if no damages are found after the event.
                  </li>
                </ul>
              </div>
            </DialogHeader>

            <div className="flex justify-center mt-4">
              <Button
                onClick={() => setOpenTerms(false)}
                className="bg-indigo-600 text-white"
              >
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        <hr className="my-8 border-gray-700" />

        {/* Copyright Section */}
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} EventureHall. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
