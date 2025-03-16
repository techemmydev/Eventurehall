import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { History, Target, ThumbsUp } from "lucide-react";

const DiscoverOurStory = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="text-center py-16 px-6 bg-white font-plus-jakarta-sans"
      data-aos="fade-up"
    >
      <h2 className="text-3xl md:text-4xl font-bold">Discover Our Story</h2>
      <p className="text-gray-600 mt-2">
        Learn about our Journey, Mission, and Values that drive us
      </p>

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto"
        data-aos="fade-up"
      >
        <div className="flex flex-col items-center" data-aos="fade-up">
          <History className="w-10 h-10 text-gray-700" />
          <h3 className="text-xl font-bold mt-4">History</h3>
          <p className="text-gray-600 mt-2 font-light">
            Established in 2024, our event center has been dedicated to
            providing exceptional spaces for all types of gatherings. We have
            hosted numerous weddings and corporate events, building a reputation
            for excellence..
          </p>
        </div>

        <div className="flex flex-col items-center" data-aos="fade-up">
          <Target className="w-10 h-10 text-gray-700" />
          <h3 className="text-xl font-bold mt-4">Mission</h3>
          <p className="text-gray-600 mt-2 font-light">
            We aim to create unforgettable experiences by offering beautiful
            venues and comprehensive event planning services tailored to our
            clients' needs. Your satisfaction is our priority.
          </p>
        </div>

        <div className="flex flex-col items-center" data-aos="fade-up">
          <ThumbsUp className="w-10 h-10 text-gray-700" />
          <h3 className="text-xl font-bold mt-4">Vision</h3>
          <p className="text-gray-600 mt-2 font-light">
            We believe in customer satisfaction, quality, integrity, and
            creativity. These values guide us in every event we host, ensuring a
            unique and memorable experience for our clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DiscoverOurStory;
