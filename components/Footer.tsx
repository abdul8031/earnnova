import Link from "next/link";
import {
  FaFacebookF,
  FaXTwitter,
  FaTelegram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#07152d] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold">
              <span className="text-blue-500">Earn</span>Nova
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              EarnNova is a modern earning platform where users can earn
              online by completing tasks, surveys and referrals.
            </p>

            <div className="flex gap-3 mt-6">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#10254d] hover:bg-blue-600 flex items-center justify-center transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#10254d] hover:bg-blue-600 flex items-center justify-center transition"
              >
                <FaXTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#10254d] hover:bg-blue-600 flex items-center justify-center transition"
              >
                <FaTelegram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#10254d] hover:bg-red-600 flex items-center justify-center transition"
              >
                <FaYoutube />
              </a>

            </div>
          </div>

          {/* Navigation */}

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Navigation
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/#services" className="hover:text-white">
                  Our Services
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Account */}

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Account
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <Link href="/login" className="hover:text-white">
                  Login
                </Link>
              </li>

              <li>
                <Link href="/signup" className="hover:text-white">
                  Get Started
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex gap-3 items-center">
                <FaEnvelope className="text-blue-500" />
                <span>support@earnnova.site</span>
              </div>

              <div className="flex gap-3 items-center">
                <FaPhone className="text-blue-500" />
                <span>24/7 Support</span>
              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">

          © {new Date().getFullYear()} EarnNova. All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}