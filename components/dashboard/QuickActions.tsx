"use client";

import { useRouter } from "next/navigation";

export default function QuickActions() {

  const router = useRouter();

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Quick Actions
      </h2>


      <div className="grid grid-cols-2 gap-4">


        <button
          onClick={() => router.push("/dashboard/tasks")}
          className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white py-3 font-semibold transition"
        >
          🚀 Start Tasks
        </button>



        <button
          onClick={() => router.push("/dashboard/surveys")}
          className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white py-3 font-semibold transition"
        >
          📋 Complete Survey
        </button>



        <button
          onClick={() => router.push("/dashboard/referral")}
          className="rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white py-3 font-semibold transition"
        >
          👥 Invite Friends
        </button>



        <button
          onClick={() => router.push("/dashboard/withdraw")}
          className="rounded-xl bg-amber-500 hover:bg-amber-600 text-white py-3 font-semibold transition"
        >
          💸 Withdraw
        </button>


      </div>

    </div>
  );
}