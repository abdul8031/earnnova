import {
  ClipboardList,
  BadgeDollarSign,
  Users,
  Wallet,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: ClipboardList,
    title: "Paid Surveys",
    description:
      "Complete surveys from trusted partners and earn rewards instantly.",
  },
  {
    icon: BadgeDollarSign,
    title: "Paid Tasks",
    description:
      "Finish simple online tasks and receive earnings directly in your wallet.",
  },
  {
    icon: Users,
    title: "Referral Program",
    description:
      "Invite friends to EarnNova and earn commission from their activity.",
  },
  {
    icon: Wallet,
    title: "Fast Withdrawals",
    description:
      "Withdraw your earnings quickly through supported payment methods.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Platform",
    description:
      "Your account and earnings are protected with secure technology.",
  },
  {
    icon: BarChart3,
    title: "Investment Plans",
    description:
      "Grow your earnings with our upcoming investment opportunities.",
  },
];

export default function OurServices() {
  return (
    <section
      id="services"
      className="bg-gray-50 py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Our Services
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Everything You Need To Earn Online
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            EarnNova provides multiple earning opportunities in one secure
            platform. Complete tasks, participate in surveys, invite friends,
            and manage your earnings easily.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Icon className="text-blue-600 w-7 h-7" />
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mt-6">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}