import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
          Join EarnNova Today
        </span>

        <h2 className="mt-6 text-4xl font-extrabold text-white md:text-5xl">
          Ready to Start Earning?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
          Join thousands of users who are already earning through surveys,
          ads, referrals, investments, and many more opportunities.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Link
            href="/signup"
            className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Get Started
          </Link>

          <Link
            href="/login"
            className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-blue-600"
          >
            Login
          </Link>

        </div>

      </div>
    </section>
  );
}