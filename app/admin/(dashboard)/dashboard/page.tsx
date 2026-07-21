import {
  Users,
  Wallet,
  DollarSign,
  ShieldCheck,
  TrendingUp,
  CreditCard,
} from "lucide-react";

const stats = [
  {
    title: "Total Users",
    value: "12,540",
    icon: Users,
    color: "bg-blue-500",
  },
  {
    title: "Total Revenue",
    value: "$24,560",
    icon: DollarSign,
    color: "bg-green-500",
  },
  {
    title: "Pending Withdraw",
    value: "84",
    icon: Wallet,
    color: "bg-orange-500",
  },
  {
    title: "Pending Verification",
    value: "37",
    icon: ShieldCheck,
    color: "bg-purple-500",
  },
  {
    title: "Today's Earnings",
    value: "$1,248",
    icon: TrendingUp,
    color: "bg-cyan-500",
  },
  {
    title: "Deposits",
    value: "$8,320",
    icon: CreditCard,
    color: "bg-pink-500",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-slate-500 mt-1">
          Welcome back, Super Admin 👋
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200"
            >
              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-slate-500">
                    {item.title}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">
                    {item.value}
                  </h2>

                </div>

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <Icon className="text-white" size={28} />
                </div>

              </div>
            </div>
          );
        })}

      </div>

      {/* Charts Placeholder */}
      <div className="grid gap-6 lg:grid-cols-2">

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">
            Revenue Overview
          </h2>

          <div className="flex h-80 items-center justify-center rounded-xl border-2 border-dashed border-slate-300 text-slate-400">
            Revenue Chart Coming Soon
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">
            User Growth
          </h2>

          <div className="flex h-80 items-center justify-center rounded-xl border-2 border-dashed border-slate-300 text-slate-400">
            User Growth Chart Coming Soon
          </div>
        </div>

      </div>

      {/* Tables Placeholder */}
      <div className="grid gap-6 lg:grid-cols-2">

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">
            Latest Users
          </h2>

          <div className="flex h-64 items-center justify-center rounded-xl border-2 border-dashed border-slate-300 text-slate-400">
            Users Table Coming Soon
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">
            Latest Withdrawals
          </h2>

          <div className="flex h-64 items-center justify-center rounded-xl border-2 border-dashed border-slate-300 text-slate-400">
            Withdraw Table Coming Soon
          </div>
        </div>

      </div>

    </div>
  );
}