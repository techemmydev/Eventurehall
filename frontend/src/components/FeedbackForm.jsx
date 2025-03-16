import React from "react";

import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({ name: "", review: "", img: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    toast.success("your feedback has been recored.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "text-[12px] font-plus-jakarta-sans",
    });

    await axios.post(`${import.meta.env.VITE_API_URL}/auth/feedback`, formData);

    setFormData({ name: "", review: "", img: "" });
  };

  return (
    <>
      <ToastContainer />
      <div className="isolate bg-white px-6 py-16 sm:py-24 lg:px-8 shadow-lg rounded-xl font-plus-jakarta-sans">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Leave Your Feedback
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            We value your thoughts and experiences. Share your feedback with us!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto mt-12 max-w-xl">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-900"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-md bg-white px-3 py-2 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="review"
                className="block text-sm font-semibold text-gray-900"
              >
                Feedback
              </label>
              <textarea
                id="review"
                name="review"
                rows={4}
                placeholder="Share your feedback here..."
                value={formData.review}
                onChange={handleChange}
                className="mt-2 w-full rounded-md bg-white px-3 py-2 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 resize-none"
                required
              />
            </div>

            {/* <div>
            <label
              htmlFor="img"
              className="block text-sm font-semibold text-gray-900"
            >
              Image URL (Optional)
            </label>

            <input
              id="img"
              name="img"
              type="text"
              placeholder="Enter image URL"
              value={formData.img}
              onChange={handleChange}
              className="mt-2 w-full rounded-md bg-white px-3 py-2 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            />
          </div> */}
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full rounded-md bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
