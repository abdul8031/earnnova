import {
  UserPlus,
  ShieldCheck,
  Coins,
  Wallet,
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Account",
    description: "Create your free EarnNova account in a few seconds.",
  },
  {
    icon: ShieldCheck,
    title: "Verify OTP",
    description: "Verify your account securely using OTP.",
  },
  {
    icon: Coins,
    title: "Start Earning",
    description: "Earn through Ads, Services, Investment & Referral.",
  },
  {
    icon: Wallet,
    title: "Withdraw",
    description: "Withdraw your earnings through EasyPaisa, JazzCash or USDT.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          How It <span className="text-blue-600">Works</span>
        </h2>

        <p className="text-center text-gray-500 mt-4 mb-14">
          Start earning in just four simple steps.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="relative bg-white border rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <Icon size={32} className="text-blue-600" />
                </div>

                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-500">
                  {step.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}