"use client";

import useDashboardData from "@/components/dashboard/DashboardData";

export default function WalletPage() {
  const { userData, loading } = useDashboardData();

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <p className="text-lg font-semibold text-gray-500">
          Loading Wallet...
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h1 className="text-4xl font-bold text-gray-800">
          Wallet
        </h1>

        <p className="mt-2 text-gray-500">
          Manage your earnings and withdrawals.
        </p>
      </div>

      {/* Wallet Cards */}
      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl bg-white p-6 shadow-md border-l-4 border-blue-600">
          <p className="text-gray-500">
            Wallet Balance
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-800">
            ${userData?.wallet ?? 0}
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md border-l-4 border-green-600">
          <p className="text-gray-500">
            Total Earned
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-800">
            ${userData?.totalEarned ?? 0}
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md border-l-4 border-amber-500">
          <p className="text-gray-500">
            Pending Balance
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-800">
            ${userData?.pendingBalance ?? 0}
          </h2>
        </div>

      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4">
        <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition">
          Deposit
        </button>

        <button className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700 transition">
          Withdraw
        </button>
      </div>

      {/* Transactions */}
      <div className="rounded-2xl bg-white shadow-md">
        <div className="border-b p-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Transaction History
          </h2>
        </div>

        <div className="p-6 text-center text-gray-500">
          No transactions found.
        </div>
      </div>
    </div>
  );
}