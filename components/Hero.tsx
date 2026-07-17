import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#07152d] text-white min-h-screen flex items-center py-16">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <span className="inline-block bg-blue-600 px-4 py-2 rounded-full text-sm font-medium">
            #1 Earning Platform
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-8 leading-tight">
            Earn Smarter,
            <br />
            <span className="text-blue-500">Every Day</span>
          </h1>

          <p className="text-gray-300 mt-8 text-lg leading-8 max-w-xl">
            Join EarnNova and start earning by completing surveys,
            watching ads, completing offers, investing and referring
            friends.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              href="/signup"
              className="bg-blue-600 hover:bg-blue-700 transition duration-300 px-8 py-4 rounded-xl font-semibold shadow-lg"
            >
              Get Started
            </Link>

            <Link
              href="/login"
              className="border border-white hover:bg-white hover:text-[#07152d] transition duration-300 px-8 py-4 rounded-xl font-semibold"
            >
              Login
            </Link>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-8 mt-12 text-gray-300">
            <span>✔ Secure</span>
            <span>✔ Fast Payments</span>
            <span>✔ Trusted</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="bg-white rounded-3xl p-8 w-full max-w-[360px] shadow-2xl">

            <h2 className="text-black text-2xl font-bold">
              EarnNova Dashboard
            </h2>

            <div className="bg-blue-600 rounded-xl mt-6 p-6 text-white">
              <p>Total Balance</p>

              <h3 className="text-4xl font-bold mt-2">
                $256.80
              </h3>

              <div className="flex gap-3 mt-6">
                <button className="bg-white text-blue-600 px-5 py-2 rounded-lg font-medium hover:bg-gray-100 transition">
                  Deposit
                </button>

                <button className="bg-blue-800 hover:bg-blue-900 transition px-5 py-2 rounded-lg font-medium">
                  Withdraw
                </button>
              </div>
            </div>

            <div className="space-y-4 mt-8 text-black">
              <div className="flex justify-between">
                <span>Completed Tasks</span>
                <span className="font-semibold">156</span>
              </div>

              <div className="flex justify-between">
                <span>Total Earnings</span>
                <span className="font-semibold">$1865</span>
              </div>

              <div className="flex justify-between">
                <span>Referrals</span>
                <span className="font-semibold">152</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}