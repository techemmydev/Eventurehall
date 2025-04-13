import React from "react";
import { MapPin, Users, CalendarCheck } from "lucide-react"; // Lucide React Icons

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import hallimagebooking from "../../assets/img/Hallimage.png"; // Import your hall image
import image8 from "../../assets/img/picture8.jpg";
import image9 from "../../assets/img/picture9.jpg";
import image10 from "../../assets/img/picture10.jpg";
import image11 from "../../assets/img/picture11.jpg";
import image12 from "../../assets/img/picture12.jpg";
import image13 from "../../assets/img/picture13.jpg";
import image15 from "../../assets/img/picture15.jpg";
import image16 from "../../assets/img/picture16.jpg";
import image17 from "../../assets/img/picture17.jpg";
import image18 from "../../assets/img/picture18.jpg";

import Button from "../../components/Button";
import CalenderUi from "../../components/CalenderUi";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { setSelectedDate } from "../../Redux/slice/BookinghallSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const HallInformationDetails = () => {
  const handleProceed = (e) => {
    if (!selectedDate) {
      e.preventDefault(); // Prevent navigation
      toast.error(" Please select a date before proceeding!", {
        position: "top-right",
        autoClose: 3000, // Closes after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "text-[12px] font-plus-jakarta-sans",
        theme: "colored",
      });
    }
  };
  const { selectedDate } = useSelector((state) => state.booking);
  const dispatch = useDispatch();
  // Parse string back to Date object for display
  const parsedDate = selectedDate ? new Date(selectedDate) : null;
  return (
    <>
      <ToastContainer />
      <div className="container mx-auto px-4 py-10 font-plus-jakarta-sans">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Section - Event Details */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Eventure Hall - Booking Feature
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Experience an unforgettable memories in our luxurious Eventure
              Hall. With elegant floral arrangements, state-of-the-art lighting,
              and a breathtaking ambiance, we ensure your special day is nothing
              short of magical.
            </p>

            <ul className="space-y-3 text-sm md:text-base font-plus-jakarta-sans">
              <li className="flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-600" />
                <strong>Capacity:</strong> 450 GUESTS
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-indigo-600" />
                <strong>Location:</strong> I FEDERAL CIVIC SERVICE CLUB
              </li>
              <li className="flex items-center gap-2">
                <CalendarCheck className="w-5 h-5 text-red-500" />
                <strong>Availability Calendar:</strong>
                <span className="text-red-500 font-bold"> BOOK A DATE</span>
              </li>
            </ul>

            {/* Calendar UI Component */}
            <div className="bg-white p-4 rounded-md shadow-md w-full max-w-xs sm:max-w-sm lg:p-8">
              <h3 className="text-lg font-semibold lg:text-[15px] mb-6">
                {" "}
                Select a Date & Secure Your Event with Us
              </h3>
              <CalenderUi
                selectedDate={parsedDate}
                setSelectedDate={(date) => dispatch(setSelectedDate(date))}
              />
            </div>

            {/* Proceed Button - Disabled if no date selected */}
            <Link
              to={selectedDate ? "/bookingform" : "#"}
              onClick={handleProceed}
            >
              <Button
                disabled={!selectedDate}
                className={`lg:block w-[200px] h-[50px] text-white px-4 py-2 rounded-lg transition font-light ${
                  selectedDate
                    ? "bg-[#5833F1] hover:bg-indigo-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                PROCEED
              </Button>
            </Link>
          </div>

          {/* Right Section - Hall Image */}
          <div className="w-full max-w-md hidden lg:block">
            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              loop
              className="rounded-lg shadow-lg"
            >
              {[
                hallimagebooking,
                image8,
                image9,
                image10,
                image11,
                image12,
                image13,
                image15,
                image16,
                image17,
                image18,
              ].map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Hall View ${index + 1}`}
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default HallInformationDetails;
