import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import hallimagebooking from "../assets/img/hallimage2.webp"; // Import your hall image
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { createBooking, resetStatus } from "../Redux/slice/BookinghallSlice";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Link } from "react-router";
import { ToastContainer } from "react-toastify";
const BookingForm = () => {
  const dispatch = useDispatch();
  const { loading, success, error, selectedDate } = useSelector(
    (state) => state.booking
  );

  const [formData, setFormData] = useState({
    clientFirstName: "",
    clientLastName: "",
    eventType: "",
    clientEmail: "",
    clientPhone: "",
    eventMessage: "",

    eventDate: selectedDate || "",
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    if (success) {
      setShowSuccessModal(true);
      setFormData({
        clientFirstName: "",
        clientLastName: "",
        eventType: "",
        clientEmail: "",
        clientPhone: "",
        eventMessage: "",

        eventDate: selectedDate || "",
      });
      setTimeout(() => {
        setShowSuccessModal(false);
        dispatch(resetStatus());
      }, 3000);
    }
    if (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    }
  }, [success, error, dispatch]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.eventDate) {
      toast.error(" Please select an event date before proceeding!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        className: "text-[12px] font-plus-jakarta-sans",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (
      !formData.clientFirstName ||
      !formData.clientLastName ||
      !formData.eventType ||
      !formData.clientEmail ||
      !formData.clientPhone ||
      !formData.eventMessage
    ) {
      toast.warning("Please fill in all fields before booking.");
      return;
    }

    if (!emailRegex.test(formData.clientEmail)) {
      toast.warning("Please enter a valid email address.");
      return;
    }

    if (!phoneRegex.test(formData.clientPhone)) {
      toast.error("please provide a valid number e.g 8065592378", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        className: "text-[12px] font-plus-jakarta-sans",
      });
      return;
    }
    try {
      await dispatch(createBooking(formData)).unwrap();
      const web3formData = new FormData();
      web3formData.append("access_key", import.meta.env.VITE_API_WEB3FORM); // Web3Forms API Key

      // Send email to the admin
      web3formData.append("email", "eventhallfscs@gmail.com"); // Replace with the actual admin email

      // Set reply-to as the client's email
      web3formData.append("replyto", formData.clientEmail);

      web3formData.append("subject", "🎉 New Booking Received!");
      web3formData.append(
        "message",
        `You have received a new event booking! Below are the details of the reservation:\n\n
        📅 Event Date: ${formData.eventDate}
        🎉 Event Type: ${formData.eventType}
        👤 Client: ${formData.clientFirstName} ${formData.clientLastName}
        📞 Contact: ${formData.clientPhone}
        ✉ Email: ${formData.clientEmail}
        📝 Message: ${formData.eventMessage}\n\n
        You can reply directly to this email to contact the client.\n\nBest regards,\n[Eventure Hall]`
      );

      const res = await fetch(import.meta.env.VITE_API_URLWEB, {
        method: "POST",
        body: web3formData,
      }).then((res) => res.json());

      if (res.success) {
        toast.success("Admin has been notified! ", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Booking error:", error);
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "An error occurred. Please try again.";

      if (errorMessage.includes("This date is already booked")) {
        toast.error(
          "This date is already booked. Please select another date.",
          {
            position: "top-right",
            autoClose: 3000,
            theme: "colored",
          }
        );
      } else {
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        });
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-14 mt-10 font-plus-jakarta-sans">
      <ToastContainer />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:p-28">
        <div className="hidden lg:block">
          <img
            // src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI4fHxib29raW5nJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D"
            // alt="Event Hall"
            src={hallimagebooking}
            alt="Event Hall"
            loading="lazy"
            className="w-full rounded-lg shadow-lg h-[500px] "
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md w-full font-plus-jakarta-sans">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-4">
            Book Your Event Hall
          </h2>
          <p className="text-center text-gray-700 text-sm italic mb-6">
            🎉 Get ready! Your special event is set for{" "}
            <strong>{formData.eventDate || "Not Selected"}</strong>. We can't
            wait to host you!{" "}
            <Link to={"/book"} className="text-blue-500">
              click to eventDate here
            </Link>
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 font-plus-jakarta-sans">
                First Name
              </label>
              <input
                type="text"
                name="clientFirstName"
                value={formData.clientFirstName}
                onChange={handleChange}
                placeholder="First Name"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 text-[12px] font-plus-jakarta-sans "
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 font-plus-jakarta-sans">
                Last Name
              </label>
              <input
                type="text"
                name="clientLastName"
                value={formData.clientLastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 text-[12px] font-plus-jakarta-sans"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 font-plus-jakarta-sans">
                Event Type
              </label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 text-[12px] font-plus-jakarta-sans"
                required
              >
                <option value="" disabled>
                  Select your event type
                </option>
                <option value="wedding">Wedding</option>
                <option value="conference">Conference</option>
                <option value="birthday">Birthday</option>
                <option value="corporate">Corporate Event</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 font-plus-jakarta-sans">
                Email
              </label>
              <input
                type="email"
                name="clientEmail"
                value={formData.clientEmail}
                onChange={handleChange}
                placeholder="Email"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 text-[12px] font-plus-jakarta-sans"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 font-plus-jakarta-sans">
                Phone Number
              </label>
              <div className="flex items-center border rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-indigo-500">
                <span className="text-gray-500 text-[12px]">+234</span>
                <input
                  type="tel"
                  name="clientPhone"
                  value={formData.clientPhone} // Remove existing +234 if re-entered
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="ml-2 w-full focus:outline-none text-[12px] font-plus-jakarta-sans"
                  required
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 font-plus-jakarta-sans">
                Message / Additional Requests
              </label>
              <textarea
                name="eventMessage"
                value={formData.eventMessage}
                onChange={handleChange}
                placeholder="Enter any additional details..."
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 text-[12px] font-plus-jakarta-sans resize-none"
                rows="4"
              />
            </div>

            <div className="md:col-span-2">
              <Button
                type="submit"
                className="bg-[#5833F1] hover:bg-indigo-700 w-full h-[50px] text-white px-4 py-2 rounded-lg font-plus-jakarta-sans"
              >
                {loading ? "Processing..." : "Book Event"}
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
          <DialogContent className="sm:max-w-md p-6">
            <DialogHeader className="text-center">
              <DialogTitle className="text-lg font-semibold text-green-600 font-plus-jakarta-sans">
                🎉 Booking Confirmed!
              </DialogTitle>
              <DialogDescription className="text-sm text-gray-600 mt-2 text-center font-plus-jakarta-sans">
                Your event has been successfully booked for{" "}
                <strong>{formData.eventDate}</strong>.
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-center mt-4">
              <Button
                onClick={() => setShowSuccessModal(false)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition font-plus-jakarta-sans"
              >
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default BookingForm;
