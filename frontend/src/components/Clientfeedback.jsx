import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import axios from "axios";
import { PlusCircle, MinusCircle } from "lucide-react"; // ✅ Import icons

const ClientFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]); // ✅ Initialized as an array
  const [feedbackLimit, setFeedbackLimit] = useState(5);
  const [isExpanded, setIsExpanded] = useState(false); // Track expansion state

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // ✅ Fetch feedback from backend safely
    axios
      .get(`${import.meta.env.VITE_API_URL}/auth/feedbacks`)
      .then((res) => {
        // console.log("API Response:", res.data); // Debugging the response
        setFeedbacks(Array.isArray(res.data?.data) ? res.data.data : []); // ✅ Ensure it's always an array
      })
      .catch((error) => console.error("Error fetching feedbacks:", error));
  }, []);

  // ✅ Function to toggle between "Show More" & "Show Less"
  const toggleFeedbackLimit = () => {
    setFeedbackLimit(isExpanded ? 6 : feedbacks.length); // Toggle limit
    setIsExpanded(!isExpanded);
  };

  // console.log("Feedbacks State:", feedbacks); // ✅ Debug feedbacks state

  return (
    <section className="py-16 px-6 bg-gray-100" data-aos="fade-up">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold font-plus-jakarta-sans">
          Client Feedback
        </h2>
        <p className="text-gray-600 mt-2 font-plus-jakarta-sans">
          See what our clients say about their unforgettable experiences with
          us.
        </p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {feedbacks?.slice(0, feedbackLimit).map((feedback, index) => {
          // ✅ Extract first and last letter of the name correctly inside `.map()`
          const initials =
            feedback.name?.length > 1
              ? `${feedback.name[0]}${feedback.name.slice(-1)}`.toUpperCase()
              : "U"; // Default to 'U' if name is undefined

          return (
            <SwiperSlide key={index} className="p-6 mb-5">
              <div
                className="bg-white shadow-lg rounded-lg p-6"
                data-aos="fade-up"
              >
                <div className="flex items-center gap-4 mb-4">
                  {/* ✅ Show Initials in a Circular Box Instead of Image */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-600 text-white text-lg font-bold">
                    {initials}
                  </div>
                  <h3 className="font-bold text-lg font-plus-jakarta-sans">
                    {feedback.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-[15px] font-plus-jakarta-sans">
                  {feedback.review}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex justify-center mt-8" data-aos="fade-up">
        {/* ✅ Icon for Show More */}
        {feedbacks.length > 6 && (
          <button
            onClick={toggleFeedbackLimit}
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 cursor-pointer"
          >
            {isExpanded ? (
              <>
                <MinusCircle size={20} />{" "}
                <span className="text-lg font-semibold">Show Less</span>
              </>
            ) : (
              <>
                <PlusCircle size={20} />{" "}
                <span className="text-lg font-semibold">Show More</span>
              </>
            )}
          </button>
        )}
      </div>
    </section>
  );
};

export default ClientFeedback;
