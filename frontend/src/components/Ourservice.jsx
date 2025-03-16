import React from "react";

const eventSpaces = [
  {
    title: "Wedding Celebration",
    description:
      "An elegant and sophisticated space for your perfect wedding day, designed to create unforgettable memories.",
    image:
      "https://images.unsplash.com/photo-1583939411023-14783179e581?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlZGRpbmclMjBwbGFubmluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Birthday Bash Extravaganza",
    description:
      "A stunning venue for a spectacular birthday celebration with stylish decor and premium amenities.",
    image:
      "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlydGhkYXl8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Conference Meetings",
    description:
      "State-of-the-art conference facilities, perfect for corporate meetings and professional events.",
    image:
      "https://images.unsplash.com/photo-1507878866276-a947ef722fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbmZlcmVuY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Cocktail Parties",
    description:
      "A vibrant and stylish space, ideal for hosting elegant cocktail parties and social gatherings.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZyUyMHBsYW5uaW5nfGVufDB8fDB8fHww",
  },
];

const Ourservice = ({ check }) => {
  return (
    <section className="py-16 bg-white font-plus-jakarta-sans">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto px-6" check={check}>
        <h3 className="text-gray-900 text-xl font-semibold uppercase">
          Venue Highlights
        </h3>
        <h2 className="text-4xl font-bold mt-2">Explore Our Event Spaces</h2>
        <p className="text-gray-600 mt-4">
          Discover the perfect venue for your next event with our stunning
          halls, each designed to create unforgettable experiences.
        </p>
      </div>

      {/* Event Grid */}
      <div className="max-w-6xl mx-auto px-6 mt-10 grid gap-8 md:grid-cols-2 ">
        {eventSpaces.map((space, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-full overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <img
                src={space.image}
                alt={space.title}
                className="w-full h-64 object-cover"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold">{space.title}</h3>
            <p className="text-gray-600 mt-2 px-4">{space.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ourservice;
