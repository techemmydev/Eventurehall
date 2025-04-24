import React from "react";
import Button from "../components/Button";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitContactForm, resetStatus } from "../Redux/slice/ContactSlice";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Link } from "react-router";
// Import react-toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../components/LoadingSpinner";
import SubscribeForm from "@/components/SubscribeForm";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    clientPhone: "",
    checkbox: false,
  });

  const [openModal, setOpenModal] = useState(false); // State for modal
  const [showPrivacy, setShowPrivacy] = useState(false);

  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.contact);

  useEffect(() => {
    if (success) {
      setFormData({
        name: "",
        email: "",
        message: "",
        clientPhone: "",
        checkbox: false,
      });
      setOpenModal(true); // Open the modal on success
      dispatch(resetStatus());
    }

    if (error) {
      // Show error toast notification
      toast.error(error || "An error occurred. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "text-[12px] font-plus-jakarta-sans",
      });
    }
  }, [success, dispatch]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // ✅ Frontend validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all fields!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "text-[12px] ",
      });
      return;
    }

    // dispatch(submitContactForm(formData));
    try {
      // Sending form data to Redux (optional)
      await dispatch(submitContactForm(formData)).unwrap();

      // ✅ Send email using Web3Forms
      const web3formData = new FormData();
      web3formData.append("access_key", import.meta.env.VITE_API_WEB3FORM); // Web3Forms API Key

      web3formData.append("email", "eventhallfscs@gmail.com"); // Admin Email
      web3formData.append("replyto", formData.email);
      web3formData.append("subject", "📩 New Contact Form Submission!");
      web3formData.append(
        "message",
        `You have received a new message!\n\n
        📝 Name: ${formData.name}
        ✉ Email: ${formData.email}
        📞Contact: ${formData.clientPhone}
        📩 Message: ${formData.message}\n\n
        Best Regards,\nEventure Hall`
      );

      const res = await fetch(import.meta.env.VITE_API_URLWEB, {
        method: "POST",

        body: web3formData,
      }).then((res) => res.json());

      if (res.success) {
        toast.success("Your message has been sent!", {
          position: "top-right",
          autoClose: 3000,
        });
        setFormData({ name: "", email: "", message: "", checkbox: false });
        setOpenModal(true);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };
  return (
    <>
      {/* ToastContainer to display toast messages */}
      <ToastContainer />
      <section className="max-w-6xl mx-auto px-6 py-12 mt-14 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Map Section */}
          <div className="w-full h-80 md:h-auto lg:mt-14">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0258733373967!2d3.3695381740458545!3d6.51840862322444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c5170879e7d%3A0x247e24b1d430bd15!2sYabatech%20Staff%20Quarter%20Block!5e0!3m2!1sen!2sng!4v1741888499453!5m2!1sen!2sng"
              width="100%"
              height="500"
              title="Responsive Google Map"
              // allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"s
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg p-6 md:p-10 rounded-lg lg:mt-14 font-plus-jakarta-sans">
            <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
            <p className="text-gray-600 mb-6">We'd love to hear from you!</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-semibold" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name" // Add this
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your Name"
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none placeholder:text-[12px] text-[13px]"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email" // Added name attribute
                  value={formData.email}
                  onChange={handleChange}
                  // required
                  placeholder="Enter your Email"
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none placeholder:text-[12px] text-[13px]"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="flex items-center border rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-indigo-500 font-plus-jakarta-sans">
                  <span className="text-gray-500 text-[12px]">+234</span>
                  <input
                    type="tel"
                    name="clientPhone"
                    value={formData.clientPhone} // Remove existing +234 if re-entered
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="ml-2 w-full focus:outline-none text-[12px]"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-semibold"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Type your Message"
                  name="message" // Added name attribute
                  value={formData.message}
                  onChange={handleChange}
                  // required
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none h-24 resize-none placeholder:text-[12px] text-[13px] font-plus-jakarta-sans"
                ></textarea>
              </div>

              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  name="checkbox" // Added name attribute
                  className="mr-2"
                  checked={formData.checkbox}
                  onChange={handleChange}
                  required
                />

                <label className="text-sm text-gray-600 lg:text-[12px]">
                  By continuing, you acknowledge and agree to our{" "}
                  <a
                    onClick={() => setShowPrivacy(true)}
                    className="font-semibold text-indigo-600 hover:underline"
                  >
                    Privacy Policy
                  </a>{" "}
                  and Terms of Service.
                </label>

                <Dialog open={showPrivacy} onOpenChange={setShowPrivacy}>
                  <DialogContent className="max-w-xl font-plus-jakarta-sans">
                    <DialogHeader>
                      <DialogTitle className="text-lg font-semibold">
                        Privacy Policy
                      </DialogTitle>
                    </DialogHeader>

                    <div className="text-sm text-gray-700 space-y-4 mt-2 max-h-[400px] overflow-y-auto">
                      <p>
                        At EventHall FCSC, we value your privacy and are
                        committed to protecting your personal information. When
                        you visit our website or contact us, we may collect
                        information such as your name, email address, phone
                        number, and event preferences to help us provide
                        tailored services. We also gather technical data like
                        your IP address and browser type to improve your
                        browsing experience.
                      </p>
                      <p>
                        Your information is used strictly for responding to
                        inquiries, processing bookings, sending important
                        updates, and improving our services. We do not sell or
                        share your personal data with third parties, and only
                        authorized staff have access to your information. Our
                        site may use cookies to enhance your experience, which
                        you can manage through your browser settings.
                      </p>
                      <p>
                        We may occasionally link to third-party websites for
                        your convenience, but we are not responsible for their
                        content or privacy practices. You have the right to
                        access, correct, or request deletion of your data at any
                        time, and you may opt out of marketing messages by
                        contacting us. Our privacy practices are designed to
                        comply with data protection regulations and prioritize
                        your control over your information.
                      </p>
                      <p>
                        By using our website, you agree to the terms outlined
                        here. We may update these policies occasionally, and
                        continued use means you accept any changes. If you have
                        questions or concerns about your data, feel free to
                        reach out to us at{" "}
                        <a
                          href="mailto:eventhallfcsc@gmail.com"
                          className="text-indigo-600"
                        >
                          eventhallfcsc@gmail.com
                        </a>{" "}
                        or call us at +234-813-942-1920 or +234-803-063-7504.
                      </p>
                    </div>

                    <div className="flex justify-end mt-4">
                      <Button
                        className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
                        onClick={() => setShowPrivacy(false)}
                      >
                        Close
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              {error && (
                <p className="error">
                  {typeof error === "string"
                    ? error
                    : error.error || "An unexpected error occurred"}
                </p>
              )}

              <Button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center">
                {loading ? <LoadingSpinner /> : "Submit"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* ✅ Success Modal */}
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="sm:max-w-md p-6">
          <DialogHeader>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <DialogTitle className="mt-4 text-lg font-semibold font-plus-jakarta-sans">
                Thank you for reaching out to Eventurehall
              </DialogTitle>
              <DialogDescription className="text-sm text-gray-600 text-center mt-2 font-plus-jakarta-sans capitalize">
                Your message has been sent successfully. We will get back to you
                shortly.
              </DialogDescription>
            </div>
          </DialogHeader>
          <div className="flex justify-center mt-4">
            <Link to={"/"}>
              <Button
                onClick={() => setOpenModal(false)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-plus-jakarta-sans"
              >
                Go back to home
              </Button>
            </Link>
          </div>
        </DialogContent>
      </Dialog>
      <SubscribeForm />
    </>
  );
};

export default ContactForm;
