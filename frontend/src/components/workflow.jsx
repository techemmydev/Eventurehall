import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  CalendarDaysIcon,
  BuildingOffice2Icon,
  UsersIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Seamless Booking",
    description:
      "Easily reserve your event space with our hassle-free online booking system, ensuring a smooth planning experience.",
    icon: CalendarDaysIcon,
  },
  {
    name: "Elegant Venues",
    description:
      "Choose from a range of stunning venues tailored for weddings, corporate events, and celebrations of all sizes.",
    icon: BuildingOffice2Icon,
  },
  {
    name: "Personalized Experience",
    description:
      "Our dedicated event planners work closely with you to create customized experiences that match your vision.",
    icon: UsersIcon,
  },
  {
    name: "Unforgettable Moments",
    description:
      "From decor to catering, we ensure every detail is perfect, creating magical experiences that last a lifetime.",
    icon: SparklesIcon,
  },
];

export default function Workflow() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white py-20 sm:py-32" data-aos="fade-up ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center font-plus-jakarta-sans">
          <p className="mt-2 text-4xl lg:text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Elevate Your Event Planning Experience
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            From seamless bookings to personalized event planning, Eventure Hall
            is your perfect venue for unforgettable celebrations.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl font-plus-jakarta-sans">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
