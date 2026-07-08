import { TrendingUp, Crown, Gem } from "lucide-react";

const plans = [
  {
    icon: TrendingUp,
    name: "Starter",
    deposit: "PKR 300",
    profit: "5% Monthly",
    duration: "30 Days",
    color: "blue",
  },
  {
    icon: Gem,
    name: "Silver",
    deposit: "PKR 5,000",
    profit: "8% Monthly",
    duration: "30 Days",
    color: "gray",
  },
  {
    icon: Crown,
    name: "Gold",
    deposit: "PKR 10,000",
    profit: "10% Monthly",
    duration: "30 Days",
    color: "yellow",
  },
];

export default function InvestmentPlans() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Investment <span className="text-blue-600">Plans</span>
        </h2>

        <p className="text-center text-gray-500 mt-4 mb-14">
          Choose a plan that fits your investment goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center hover:-translate-y-2"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <Icon className="text-blue-600" size={38} />
                </div>

                <h3 className="text-2xl font-bold mb-6">
                  {plan.name}
                </h3>

                <div className="space-y-3 text-gray-600">

                  <p>
                    <strong>Minimum Deposit:</strong><br />
                    {plan.deposit}
                  </p>

                  <p>
                    <strong>Profit:</strong><br />
                    {plan.profit}
                  </p>

                  <p>
                    <strong>Duration:</strong><br />
                    {plan.duration}
                  </p>

                </div>

                <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
                  Invest Now
                </button>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}