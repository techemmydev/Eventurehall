import React from "react";
import image1 from "../assets/img/picture1.jpg";
import image2 from "../assets/img/picture2.jpg";
import image3 from "../assets/img/picture3.jpg";
import image4 from "../assets/img/picture4.jpg";
import image5 from "../assets/img/picture5.jpg";
import image7 from "../assets/img/picture5.jpg";
import image6 from "../assets/img/picture6.jpg";

import image8 from "../assets/img/picture8.jpg";
import image9 from "../assets/img/picture9.jpg";
import image10 from "../assets/img/picture10.jpg";
import image11 from "../assets/img/picture11.jpg";
import image12 from "../assets/img/picture12.jpg";
import image13 from "../assets/img/picture13.jpg";
import image15 from "../assets/img/picture15.jpg";
import image16 from "../assets/img/picture16.jpg";
import image17 from "../assets/img/picture17.jpg";
import image18 from "../assets/img/picture18.jpg";
const eventImages = [
  { url: image1, eventType: "Picture 1" },
  { url: image2, eventType: "Picture 2" },
  { url: image3, eventType: "Picture 3" },
  { url: image4, eventType: "Picture 4" },
  { url: image5, eventType: "Picture 5" },
  { url: image6, eventType: "Picture 6" },
  { url: image7, eventType: "Picture 7" },
  { url: image8, eventType: "Picture 8" },
  { url: image9, eventType: "Picture 9" },
  { url: image10, eventType: "Picture 10" },
  { url: image11, eventType: "Picture 11" },
  { url: image12, eventType: "Picture 12" },
  { url: image13, eventType: "Picture 13" },
  { url: image1, eventType: "Picture 14" },
  { url: image15, eventType: "Picture 15" },
  { url: image16, eventType: "Picture 16" },
  { url: image17, eventType: "Picture 17" },
  { url: image18, eventType: "Picture 18" },
];

const GalleryPage = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-16 font-plus-jakarta-sans">
      <div className="max-w-6xl mx-auto text-center mb-10 mt-14 lg:p-10">
        <h2 className="text-4xl font-bold text-gray-900">
          Event Highlights Gallery
        </h2>
        <p className="text-gray-600 text-lg mt-2">
          Explore unforgettable moments captured from our amazing events.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {eventImages.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={`${image.url}?w=500&h=400&fit=crop`}
              alt={`Event ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-60 transition-opacity flex items-center justify-center">
              <p className="text-white font-semibold text-lg bg-black bg-opacity-20 px-4 py-2 rounded-md">
                {image.eventType}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryPage;
