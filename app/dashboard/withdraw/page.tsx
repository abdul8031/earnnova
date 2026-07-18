"use client";

import { useState } from "react";
import useDashboardData from "@/components/dashboard/DashboardData";
import WithdrawHistory from "@/components/dashboard/WithdrawHistory";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

export default function WithdrawPage() {
  const { userData, loading } = useDashboardData();

  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("JazzCash");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleWithdraw = async () => {
    setMessage("");

    if (!auth.currentUser) {
      setMessage("Please login first.");
      return;
    }

    if (!amount || Number(amount) <= 0) {
      setMessage("Please enter a valid amount.");
      return;
    }

    if (Number(amount) > (userData?.wallet ?? 0)) {
      setMessage("Insufficient wallet balance.");
      return;
    }

    try {
      setSubmitting(true);

      await addDoc(collection(db, "withdrawRequests"), {
        userId: auth.currentUser.uid,
        fullName: userData?.fullName,
        email: userData?.email,
        amount: Number(amount),
        method,
        status: "Pending",
        createdAt: serverTimestamp(),
      });

      setAmount("");
      setMessage("✅ Withdraw request submitted successfully.");
    } catch (error) {
      console.error(error);
      setMessage("❌ Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <p className="text-lg font-semibold text-gray-500">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h1 className="text-4xl font-bold text-gray-800">
          Withdraw
        </h1>

        <p className="mt-2 text-gray-500">
          Request a withdrawal from your wallet.
        </p>
      </div>

      {/* Available Balance */}
      <div className="rounded-2xl border-l-4 border-blue-600 bg-white p-6 shadow-md">
        <p className="text-gray-500">
          Available Balance
        </p>

        <h2 className="mt-3 text-4xl font-bold text-gray-800">
          ${userData?.wallet ?? 0}
        </h2>
      </div>

      {/* Withdraw Form */}
      <div className="space-y-5 rounded-2xl bg-white p-6 shadow-md">

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Withdraw Method
          </label>

          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          >
            <option>JazzCash</option>
            <option>EasyPaisa</option>
            <option>USDT (TRC20)</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Amount
          </label>

          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          />
        </div>

        <button
          onClick={handleWithdraw}
          disabled={submitting}
          className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {submitting
            ? "Submitting..."
            : "Submit Withdraw Request"}
        </button>

        {message && (
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-3 text-blue-700">
            {message}
          </div>
        )}

      </div>

      {/* Withdraw History */}
      <div className="rounded-2xl bg-white shadow-md">
        <div className="border-b p-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Withdraw History
          </h2>
        </div>

        <WithdrawHistory />
      </div>
    </div>
  );
}