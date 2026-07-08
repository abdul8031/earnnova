import {
  PlayCircle,
  Users,
  Briefcase,
  TrendingUp,
  Gift,
  CheckSquare,
  Sparkles,
  BadgeDollarSign,
} from "lucide-react";

const earningWays = [
  {
    icon: PlayCircle,
    title: "Watch Ads",
    description: "Watch ads and earn rewards.",
  },
  {
    icon: Users,
    title: "Referral Program",
    description: "Invite friends and earn commission.",
  },
  {
    icon: Briefcase,
    title: "Premium Services",
    description: "Complete service orders and earn.",
  },
  {
    icon: TrendingUp,
    title: "Investment",
    description: "Invest and receive monthly profit.",
  },
  {
    icon: Gift,
    title: "Daily Bonus",
    description: "Claim your daily bonus every day.",
  },
  {
    icon: CheckSquare,
    title: "Tasks",
    description: "Complete simple tasks for rewards.",
  },
  {
    icon: Sparkles,
    title: "Lucky Spin",
    description: "Spin the wheel to win bonuses.",
  },
  {
    icon: BadgeDollarSign,
    title: "Special Offers",
    description: "Complete partner offers and earn.",
  },
];

export default function WaysToEarn() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Ways To <span className="text-blue-600">Earn</span>
        </h2>

        <p className="text-center text-gray-500 mt-4 mb-14">
          Choose your favorite earning method and start today.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {earningWays.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 p-8 text-center transition duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-5">
                  <Icon size={30} className="text-blue-600" />
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