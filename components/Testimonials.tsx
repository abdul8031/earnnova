"use client";

import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Muhammad Ali",
    country: "Pakistan",
    review:
      "EarnNova has completely changed my online earning experience. Withdrawals are fast and secure.",
  },
  {
    name: "Sara Khan",
    country: "Pakistan",
    review:
      "I love completing surveys and watching ads. The platform is clean and payments are always on time.",
  },
  {
    name: "Usman Ahmed",
    country: "Pakistan",
    review:
      "The referral system is amazing. I earn extra income every week by inviting my friends.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            What Our Users Say
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Thousands of users trust EarnNova for secure and reliable online earning opportunities.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.name}
              name={item.name}
              country={item.country}
              review={item.review}
            />
          ))}
        </div>
      </div>
    </section>
  );
}