"use client";

import StatCard from "@/components/dashboard/StatCard";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentActivity from "@/components/dashboard/RecentActivity";
import useDashboardData from "@/components/dashboard/DashboardData";

export default function DashboardPage() {

  const { userData, loading } = useDashboardData();


  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <p className="text-lg font-semibold text-gray-500">
          Loading Dashboard...
        </p>
      </div>
    );
  }


  return (

    <div className="space-y-8">


      {/* Welcome Section */}

      <div>

        <h1 className="text-4xl font-bold text-gray-800">
          Welcome Back {userData?.fullName || "User"} 👋
        </h1>


        <p className="mt-2 text-lg text-gray-500">
          Manage your earnings, tasks and wallet from your dashboard.
        </p>


        {/* User Info */}

        <div className="mt-6 flex flex-wrap gap-4">


          <div className="bg-white rounded-xl shadow p-5 min-w-[180px]">

            <p className="text-gray-500 text-sm">
              Membership
            </p>

            <h3 className="text-xl font-bold text-blue-600 mt-1">
              {userData?.membership || "Free"}
            </h3>

          </div>



          <div className="bg-white rounded-xl shadow p-5 min-w-[180px]">

            <p className="text-gray-500 text-sm">
              Total Referrals
            </p>

            <h3 className="text-xl font-bold text-green-600 mt-1">
              {userData?.totalReferrals || 0}
            </h3>

          </div>



          <div className="bg-white rounded-xl shadow p-5 min-w-[180px]">

            <p className="text-gray-500 text-sm">
              Account Status
            </p>

            <h3 className="text-xl font-bold text-indigo-600 mt-1">
              Active
            </h3>

          </div>


        </div>


      </div>





      {/* Statistics Cards */}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">


        <StatCard

          title="Wallet Balance"

          value={`$${userData?.wallet ?? 0}`}

          icon="💳"

          borderColor="border-blue-600"

        />



        <StatCard

          title="Today's Earnings"

          value={`$${userData?.todayEarnings ?? 0}`}

          icon="💵"

          borderColor="border-emerald-500"

        />



        <StatCard

          title="Total Earnings"

          value={`$${userData?.totalEarned ?? 0}`}

          icon="📈"

          borderColor="border-indigo-600"

        />



        <StatCard

          title="Pending Withdraw"

          value={`$${userData?.pendingBalance ?? 0}`}

          icon="⏳"

          borderColor="border-amber-500"

        />


      </div>





      {/* Quick Actions + Activity */}

      <div className="grid gap-6 lg:grid-cols-2">


        <QuickActions />


        <RecentActivity />


      </div>



    </div>

  );
}