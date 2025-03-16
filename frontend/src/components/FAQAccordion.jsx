// src/components/FAQAccordion.jsx
import React, { useState } from "react";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronUp, ChevronDown } from "lucide-react"; // Lucide React Icons

// Sample FAQ data
const faqData = [
  {
    question: "Can I book multiple services for my event?",
    answer:
      "Yes, you can book multiple services, including catering, decoration, and entertainment, to create a seamless and unforgettable event experience. Our team will coordinate all aspects to ensure everything runs smoothly.",
  },
  {
    question: "What is your cancellation and refund policy?",
    answer:
      "We understand that plans may change. Cancellations made at least 30 days before the event are eligible for a partial refund, while cancellations within 30 days may be subject to a cancellation fee. Please review our full terms or contact our team for details.",
  },
  {
    question: "Do you offer customizable event packages?",
    answer:
      "Absolutely! We provide tailored event packages to suit your specific needs and budget. Whether you need full-service planning or just select services, we can customize a package that aligns with your vision.",
  },
  {
    question: "How far in advance should I book my event?",
    answer:
      "To ensure availability, we recommend booking at 4weeks months in advance, especially for peak seasons. However, we do our best to accommodate last-minute requests whenever possible.",
  },
  {
    question: "Do you provide on-site event coordination?",
    answer:
      "Yes, our professional event coordinators will be on-site to oversee every detail and ensure your event runs seamlessly. From setup to teardown, our team is dedicated to providing a stress-free experience for you and your guests.",
  },
  {
    question: "Can I schedule a tour of the venue before booking?",
    answer:
      "Of course! We encourage clients to schedule a tour of our venue to explore the space, discuss their event vision, and ask any questions. Contact us to set up an appointment at your convenience.",
  },
];

const FAQAccordion = () => {
  // State to manage multiple open accordion items
  const [activeIndices, setActiveIndices] = useState([0, 1]); // Open first two by default

  const toggleAccordion = (index) => {
    setActiveIndices(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // Close if open
          : [...prev, index] // Open if closed
    );
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div
      className="bg-[#F8F8F8] lg:p-32 font-plus-jakarta-sans"
      data-aos="fade-up"
    >
      <div className="max-w-7xl lg:max-w-4xl mx-auto py-12 px-6 lg:py-0 lg:px-0">
        {/* <h2 className="text-center text-[#B38B37] uppercase font-bold mb-3 font-OpenSans">
          FAQs
        </h2> */}
        <h3 className="text-center text-4xl lg:text-4xl font-extrabold mb-8 font-serif lg:mb-9">
          Frequently Asked Questions
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {faqData.map((item, index) => (
            <div
              key={index}
              className=" cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-between items-center lg:gap-16">
                <h4
                  className={`text-lg font-semibold ${
                    activeIndices.includes(index)
                      ? "text-[#000000]"
                      : "text-black font-plus-jakarta-sans"
                  }`}
                >
                  {item.question}
                </h4>
                <span className="text-black text-xl">
                  {activeIndices.includes(index) ? (
                    <ChevronUp />
                  ) : (
                    <ChevronDown />
                  )}
                </span>
              </div>
              {activeIndices.includes(index) && (
                <p className="mt-4 text-gray-600 lg:text-left font-PlusJakartaSans text-[15px]">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
