"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
            E
          </div>

          <div>
            <h1 className="text-2xl font-bold">
              <span className="text-blue-600">Earn</span>
              <span className="text-gray-900">Nova</span>
            </h1>

            <p className="text-xs text-gray-500">Smart Earnings</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-8 font-medium">
          <Link href="/">Home</Link>
          <Link href="/#services">Our Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Buttons */}
        <div className="hidden lg:flex gap-3">
          <Link
            href="/login"
            className="border border-blue-600 text-blue-600 px-5 py-2 rounded-xl hover:bg-blue-50 transition"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden">
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
}