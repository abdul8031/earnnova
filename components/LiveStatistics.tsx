"use client";
import {
  Users,
  DollarSign,
  ClipboardCheck,
  Star,
} from "lucide-react";

import StatCard from "./StatCard";

export default function LiveStatistics() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Live Statistics
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Our Platform in Numbers
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Thousands of users trust EarnNova every day to earn online safely and securely.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <StatCard
            icon={Users}
            value="25,000+"
            title="Active Users"
          />

          <StatCard
            icon={DollarSign}
            value="$500,000+"
            title="Total Paid"
          />

          <StatCard
            icon={ClipboardCheck}
            value="150,000+"
            title="Tasks Completed"
          />

          <StatCard
            icon={Star}
            value="99.9%"
            title="Success Rate"
          />

        </div>
      </div>
    </section>
  );
}