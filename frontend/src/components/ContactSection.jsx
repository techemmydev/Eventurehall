// src/components/ContactSection.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className=" text-black font-plus-jakarta-sans" data-aos="fade-up">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 md:px-16   bg-[#F3F4F6]">
        <div className="flex flex-col ">
          <Mail className="text-black text-4xl" />
          <h3 className="text-lg font-bold mt-4">Email Us</h3>
          <p className=" text-sm font-extralight leading-7">
            For inquiries or to book your next event, please reach out to us at 
            <span className="font-medium"> eventhallfcsc@gmail.com </span> We
            look forward to helping you create unforgettable experiences!
          </p>
        </div>
        <div className="flex flex-col ">
          <Phone className=" text-4xl" />

          <h3 className="text-lg font-bold mt-4">Call us</h3>
          <p className="text-black text-sm font-extralight leading-7">
            For immediate assistance or to discuss your event needs, feel free
            to call us at{" "}
            <span className="font-medium">
              {" "}
              +234-902-324-3956 or +234-813-717-9642.{" "}
            </span>{" "}
            Our team is ready to assist you with any questions or concerns you
            may have.
          </p>
        </div>
        <div className="flex flex-col ">
          <MapPin className="text-black text-4xl" />
          <h3 className="text-lg font-bold mt-4">Visit Us</h3>
          <p className="text-black text-sm font-extralight leading-7">
            You can find us at{" "}
            <span className="font-medium">
              {" "}
              Federal Civil Service Club, No. 1 Club Road, Yabatech Staff
              Quarters, GRA, Yaba, Lagos.{" "}
            </span>{" "}
            Feel free to stop by and explore our beautiful venues—we’d be happy
            to discuss your event plans with you in person!
          </p>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="w-full h-64 md:h-80">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0258733373967!2d3.3695381740458545!3d6.51840862322444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c5170879e7d%3A0x247e24b1d430bd15!2sYabatech%20Staff%20Quarter%20Block!5e0!3m2!1sen!2sng!4v1741888499453!5m2!1sen!2sng"
          width="100%"
          height="250"
          title="Responsive Google Map"
          // allowfullscreen=""
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"s
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;
