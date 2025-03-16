import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import Button from "../components/Button";

// Import Low-Quality Placeholder Image (Optional)
import placeholder from "../assets/img/heroimage6.avif";
import image1 from "../assets/img/banquet-table-with-snacks.png";
import image2 from "../assets/img/restaurant-hall-with-small-stage-monitor-red-curtains-brick-walls-white-napoleon-chairs.png";
import image3 from "../assets/img/dj-playing-music-mixer.png";

const services = [
  {
    title: "Gourmet Catering Services",
    description:
      "Our catering menu crafts delicious and luxury meals, perfect for your grand celebration.",
    img: image1,
  },
  {
    title: "Stunning Event Decorations",
    description:
      "Transform your event space with creative and luxurious decorations tailored to your theme.",
    img: image2,
  },
  {
    title: "Top-Notch Entertainment",
    description:
      "Keep your guests entertained with live performers, DJs, and interactive fun activities.",
    img: image3,
  },
];

const EventServices = () => {
  const [loadedImages, setLoadedImages] = useState(
    Array(services.length).fill(false) // Track loaded state for each image
  );

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  return (
    <section className="py-12 px-6 text-center font-plus-jakarta-sans">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl font-bold mb-4 font-plus-jakarta-sans"
          data-aos="fade-down"
        >
          Explore Our Comprehensive Event Services
        </h2>
        <p className="text-gray-600 mb-8" data-aos="fade-up">
          Our event center offers a wide range of services to make your event
          unforgettable.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow-lg rounded-lg"
              data-aos="fade-up"
            >
              <img
                src={loadedImages[index] ? service.img : placeholder}
                alt={service.title}
                className={`rounded-lg w-full h-40 object-cover mb-4 transition-opacity duration-700 ${
                  loadedImages[index] ? "opacity-100" : "opacity-0"
                }`}
                loading="lazy"
                onLoad={() => handleImageLoad(index)}
              />
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600 mt-2 text-[15px]">
                {service.description}
              </p>
              {/* <Button className="border border-[#5833F1] hover:bg-sky-700 hover:text-white w-[150px] h-[50px] text-[#5833F1] px-4 py-2 rounded-lg transition cursor-pointer font-light font-plus-jakarta-sans mt-4">
                Learn more
              </Button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventServices;
