import {
  ShieldCheck,
  Wallet,
  Users,
  Headphones,
  Zap,
  Briefcase,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "100% Secure",
    description: "Your account and earnings are protected with advanced security.",
  },
  {
    icon: Zap,
    title: "Fast Withdrawals",
    description: "Withdraw your earnings quickly through supported methods.",
  },
  {
    icon: Briefcase,
    title: "Multiple Earning Options",
    description: "Earn from Ads, Services, Investment and Referrals.",
  },
  {
    icon: Users,
    title: "Referral System",
    description: "Invite friends and earn referral commissions.",
  },
  {
    icon: Wallet,
    title: "Secure Wallet",
    description: "Manage deposits, earnings and withdrawals easily.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our support team is always ready to help.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900">
          Why Choose
          <span className="text-blue-600"> EarnNova?</span>
        </h2>

        <p className="text-center text-gray-500 mt-4 mb-14">
          Everything you need to earn safely from one platform.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 border border-gray-100"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <Icon className="text-blue-600" size={32} />
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-500">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}