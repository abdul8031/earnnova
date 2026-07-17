"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
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

            <p className="text-xs text-gray-500">
              Smart Earnings
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 font-medium">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          <Link
            href="/#services"
            className="hover:text-blue-600 transition"
          >
            Our Services
          </Link>

          <Link
            href="/contact"
            className="hover:text-blue-600 transition"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-3">
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

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t bg-white shadow-lg">
          <nav className="flex flex-col px-6 py-5 gap-5">

            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>

            <Link
              href="/#services"
              onClick={() => setIsOpen(false)}
            >
              Our Services
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <hr />

            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="border border-blue-600 text-blue-600 py-3 rounded-xl text-center"
            >
              Login
            </Link>

            <Link
              href="/signup"
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 text-white py-3 rounded-xl text-center"
            >
              Get Started
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}