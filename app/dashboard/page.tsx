import StatCard from "@/components/dashboard/StatCard";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentActivity from "@/components/dashboard/RecentActivity";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome Back 👋
        </h1>

        <p className="mt-2 text-lg text-gray-500">
          Manage your earnings, tasks and wallet from your dashboard.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Wallet Balance"
          value="$0.00"
          icon="💳"
          borderColor="border-blue-600"
        />

        <StatCard
          title="Today's Earnings"
          value="$0.00"
          icon="💵"
          borderColor="border-emerald-500"
        />

        <StatCard
          title="Total Earnings"
          value="$0.00"
          icon="📈"
          borderColor="border-indigo-600"
        />

        <StatCard
          title="Pending Withdraw"
          value="$0.00"
          icon="⏳"
          borderColor="border-amber-500"
        />
      </div>

      {/* Bottom Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        <QuickActions />
        <RecentActivity />
      </div>
    </div>
  );
}