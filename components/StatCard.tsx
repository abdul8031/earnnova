"use client";

import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  title: string;
}

export default function StatCard({
  icon: Icon,
  value,
  title,
}: StatCardProps) {
  return (
    <div className="group rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-8 w-8" />
      </div>

      <h3 className="text-4xl font-bold text-gray-900">
        {value}
      </h3>

      <p className="mt-3 text-gray-600">
        {title}
      </p>
    </div>
  );
}