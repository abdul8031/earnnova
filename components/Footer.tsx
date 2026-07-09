import Link from "next/link";
import {
  FaFacebookF,
  FaXTwitter,
  FaTelegram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaComments,
  FaClock,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#07142d] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Earn<span className="text-blue-500">Nova</span>
            </h2>

            <p className="text-gray-400 mt-5 text-sm leading-7">
              EarnNova is a trusted earning platform where you can earn
              by completing tasks, surveys, watching ads and much more.
            </p>

            <div className="flex gap-3 mt-6">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#0d2346] hover:bg-blue-600 flex items-center justify-center transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#0d2346] hover:bg-blue-600 flex items-center justify-center transition"
              >
                <FaXTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#0d2346] hover:bg-blue-600 flex items-center justify-center transition"
              >
                <FaTelegram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#0d2346] hover:bg-red-600 flex items-center justify-center transition"
              >
                <FaYoutube />
              </a>

            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="font-bold text-xl mb-5">Quick Links</h3>

            <ul className="space-y-3 text-gray-400">

              <li><Link href="/">Home</Link></li>

              <li><Link href="/how-it-works">How It Works</Link></li>

              <li><Link href="/earn">Earn</Link></li>

              <li><Link href="/features">Features</Link></li>

              <li><Link href="/pricing">Pricing</Link></li>

              <li><Link href="/contact">Contact</Link></li>

            </ul>

          </div>

          {/* Support */}

          <div>

            <h3 className="font-bold text-xl mb-5">Support</h3>

            <ul className="space-y-3 text-gray-400">

              <li><Link href="/help-center">Help Center</Link></li>

              <li><Link href="/faq">FAQ</Link></li>

              <li><Link href="/terms">Terms of Service</Link></li>

              <li><Link href="/privacy-policy">Privacy Policy</Link></li>

              <li><Link href="/payment-proof">Payment Proof</Link></li>

              <li><Link href="/contact">Contact Us</Link></li>

            </ul>

          </div>

          {/* Earning */}

          <div>

            <h3 className="font-bold text-xl mb-5">Earning</h3>

            <ul className="space-y-3 text-gray-400">

              <li><Link href="/surveys">Surveys</Link></li>

              <li><Link href="/watch-ads">Watch Ads</Link></li>

              <li><Link href="/offers">Offers</Link></li>

              <li><Link href="/daily-bonus">Daily Bonus</Link></li>

              <li><Link href="/referral">Referral Program</Link></li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="font-bold text-xl mb-5">Contact Us</h3>

            <div className="space-y-5 text-gray-400">

              <div className="flex gap-3">
                <FaEnvelope className="mt-1 text-blue-500" />
                <span>support@earnnova.com</span>
              </div>

              <div className="flex gap-3">
                <FaPhone className="mt-1 text-blue-500" />
                <span>+92 300 1234567</span>
              </div>

              <div className="flex gap-3">
                <FaComments className="mt-1 text-blue-500" />
                <span>Live Chat</span>
              </div>

              <div className="flex gap-3">
                <FaClock className="mt-1 text-blue-500" />
                <span>24/7 Support</span>
              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">

          © {new Date().getFullYear()} EarnNova. All rights reserved.

        </div>

      </div>
    </footer>
  );
}