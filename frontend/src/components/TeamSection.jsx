import React from "react";

const people = [
  {
    id: 1,
    name: "Dr. Haastrup A .Victor",
    role: "Co-Founder / CEO",
  },
  {
    id: 2,
    name: "Chukwuma Emmanuel.C",
    role: "CTO / Lead Developer",
  },
  {
    id: 3,
    name: "Mr.Adebayo A.O",
    role: "Head of Marketing",
  },
  {
    id: 4,
    name: "Cherish Adepeju",
    role: "Team Lead / Head of Operations",
  },
  {
    id: 5,
    name: "Moses Oluwademilare",
    role: "Lead Designer",
  },
];

const getInitials = (name) => {
  const trimmed = name.trim();
  return (
    trimmed.charAt(0).toUpperCase() +
    trimmed.charAt(trimmed.length - 1).toUpperCase()
  );
};

const TeamSection = () => {
  return (
    <div className="bg-white py-15 sm:py-32 font-plus-jakarta-sans">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.id}>
              <div className="flex items-center gap-x-6">
                <div className="flex items-center justify-center size-16 rounded-full bg-gray-900 text-white font-bold text-lg">
                  {getInitials(person.name)}
                </div>
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm/6 font-semibold text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamSection;
