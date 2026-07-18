"use client";

import useDashboardData from "@/components/dashboard/DashboardData";

export default function UserProfile() {
  const { userData, loading } = useDashboardData();

  if (loading) {
    return (
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gray-300 animate-pulse" />

        <div className="hidden md:block">
          <div className="h-4 w-24 rounded bg-gray-300 animate-pulse mb-2" />
          <div className="h-3 w-36 rounded bg-gray-200 animate-pulse" />
        </div>
      </div>
    );
  }

  const name = userData?.fullName || "User";
  const email = userData?.email || "";

  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
        {name.charAt(0).toUpperCase()}
      </div>

      <div className="hidden md:block">
        <p className="font-semibold text-gray-800">
          {name}
        </p>

        <p className="text-sm text-gray-500">
          {email}
        </p>
      </div>
    </div>
  );
}