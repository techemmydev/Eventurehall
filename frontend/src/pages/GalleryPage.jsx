import React from "react";

const eventImages = [
  {
    url: "https://images.unsplash.com/photo-1583939411023-14783179e581?w=500&auto=format&fit=crop&q=60",
    eventType: "Wedding",
  },
  {
    url: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=500&auto=format&fit=crop&q=60",
    eventType: "Birthday",
  },
  {
    url: "https://images.unsplash.com/photo-1521334884684-d80222895322",
    eventType: "Corporate Event",
  },
  {
    url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    eventType: "Conference",
  },
  {
    url: "https://images.unsplash.com/photo-1542744094-3a31f272c490",
    eventType: "Wedding",
  },
  {
    url: "https://images.unsplash.com/photo-1507878866276-a947ef722fee?w=500&auto=format&fit=crop&q=60",
    eventType: "Conference",
  },
  {
    url: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8",
    eventType: "Corporate Event",
  },
  {
    url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    eventType: "Birthday",
  },
  {
    url: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
    eventType: "Wedding",
  },
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
