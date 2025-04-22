import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer"; // Import Intersection Observer

const stats = [
  { id: 1, name: "Successful Events Hosted", value: 1200 },
  { id: 2, name: "Happy Clients", value: 5000 },
  { id: 3, name: "Venues Available", value: 1 },
];

export default function Stats() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white py-20 sm:py-32 lg:py-19">
      <div className="mx-auto max-w-7xl px-6 lg:px-8" data-aos="fade-up">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => {
            const { ref, inView } = useInView({ triggerOnce: true });

            return (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
                ref={ref}
              >
                <dt className="text-base font-medium text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {inView ? (
                    <CountUp
                      end={stat.value}
                      duration={2}
                      suffix="+"
                      className="font-Elsie-swash"
                    />
                  ) : (
                    "0"
                  )}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </div>
  );
}
