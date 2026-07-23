"use client";

import StatCard from "@/components/dashboard/StatCard";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentActivity from "@/components/dashboard/RecentActivity";
import useDashboardData from "@/components/dashboard/DashboardData";


export default function DashboardPage() {

  const { userData, loading } = useDashboardData();


  if(loading){

    return (
      <div className="flex h-[70vh] items-center justify-center">
        Loading Dashboard...
      </div>
    );

  }


  return (

    <div className="space-y-8">


      <div>
        <h1 className="text-4xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your earnings, tasks and wallet.
        </p>
      </div>



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
          borderColor="border-green-600"
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
          borderColor="border-yellow-500"
        />


      </div>



      <div className="grid lg:grid-cols-2 gap-6">

        <QuickActions />

        <RecentActivity />

      </div>


    </div>

  );

}