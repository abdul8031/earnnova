import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              EarnNova
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              EarnNova is a modern earning platform where users can earn
              through surveys, ads, referrals, investments, and many more
              opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <div className="space-y-3">
              <Link href="/" className="block hover:text-blue-400">
                Home
              </Link>

              <Link href="/login" className="block hover:text-blue-400">
                Login
              </Link>

              <Link href="/signup" className="block hover:text-blue-400">
                Sign Up
              </Link>

              <Link href="/contact" className="block hover:text-blue-400">
                Contact
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Support
            </h3>

            <div className="space-y-3">
              <Link href="/faq" className="block hover:text-blue-400">
                FAQ
              </Link>

              <Link href="/privacy" className="block hover:text-blue-400">
                Privacy Policy
              </Link>

              <Link href="/terms" className="block hover:text-blue-400">
                Terms & Conditions
              </Link>

              <Link href="/cookies" className="block hover:text-blue-400">
                Cookie Policy
              </Link>
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Payment Methods
            </h3>

            <div className="space-y-3">
              <p>EasyPaisa</p>
              <p>JazzCash</p>
              <p>USDT (TRC20)</p>
            </div>

            <div className="mt-6 flex gap-4">

              <Link href="#">
                <Facebook className="h-6 w-6 hover:text-blue-500" />
              </Link>

              <Link href="#">
                <Instagram className="h-6 w-6 hover:text-pink-500" />
              </Link>

              <Link href="#">
                <Twitter className="h-6 w-6 hover:text-sky-400" />
              </Link>

              <Link href="#">
                <Youtube className="h-6 w-6 hover:text-red-500" />
              </Link>

            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} EarnNova. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}