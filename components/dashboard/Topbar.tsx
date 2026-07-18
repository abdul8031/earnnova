"use client";

import { FiBell, FiSearch } from "react-icons/fi";
import UserProfile from "@/components/dashboard/UserProfile";

export default function Topbar() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between">
      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Customer Dashboard
        </h1>

        <p className="text-sm text-gray-500">
          Welcome back to EarnNova
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        {/* Search */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-xl px-3 py-2 w-72">
          <FiSearch className="text-gray-500" />

          <input
            type="text"
            placeholder="Search..."
            className="ml-2 w-full bg-transparent text-sm outline-none"
          />
        </div>

        {/* Notification */}
        <button className="relative rounded-lg p-2 transition hover:bg-gray-100">
          <FiBell size={22} />

          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            3
          </span>
        </button>

        {/* User Profile */}
        <UserProfile />
      </div>
    </header>
  );
}