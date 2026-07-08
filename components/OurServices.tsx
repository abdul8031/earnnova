import {
  ClipboardList,
  PlayCircle,
  Gift,
  Wallet,
  Sparkles,
  Users,
} from "lucide-react";

import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: ClipboardList,
    title: "Paid Surveys",
    description:
      "Complete simple surveys from trusted partners and earn rewards instantly.",
  },
  {
    icon: PlayCircle,
    title: "Watch Ads",
    description:
      "Watch short promotional videos and receive instant rewards after completion.",
  },
  {
    icon: Gift,
    title: "Offerwalls",
    description:
      "Complete offers, install apps, or register on partner websites to earn more.",
  },
  {
    icon: Wallet,
    title: "Investment Plans",
    description:
      "Choose an investment plan and earn daily profits securely.",
  },
  {
    icon: Sparkles,
    title: "Lucky Spin",
    description:
      "Spin the reward wheel every day for exciting bonuses and cashback.",
  },
  {
    icon: Users,
    title: "Referral Program",
    description:
      "Invite your friends and earn lifetime commissions from their activity.",
  },
];

export default function OurServices() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Our Services
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Multiple Ways to Earn with EarnNova
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover powerful earning opportunities designed to help you
            maximize your income. Choose your favorite earning method and
            start making money today.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}