"use client";

import { Bell, Search, Menu } from "lucide-react";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6 shadow-sm">

      {/* Left */}
      <div className="flex items-center gap-4">

        <button className="rounded-lg p-2 hover:bg-slate-100 lg:hidden">
          <Menu size={22} />
        </button>

        <div className="hidden md:flex items-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 w-80">
          <Search size={18} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="ml-3 w-full bg-transparent outline-none"
          />
        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        <button className="relative rounded-xl p-2 hover:bg-slate-100">

          <Bell size={22} />

          <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-red-500"></span>

        </button>

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
            A
          </div>

          <div className="hidden md:block">
            <p className="font-semibold text-slate-800">
              Super Admin
            </p>

            <p className="text-xs text-slate-500">
              admin@earnnova.site
            </p>
          </div>

        </div>

      </div>

    </header>
  );
}