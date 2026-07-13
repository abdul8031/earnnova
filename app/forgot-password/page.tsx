"use client";

import { useState } from "react";
import Link from "next/link";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleReset(e: React.FormEvent) {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    try {
      setLoading(true);

      await sendPasswordResetEmail(auth, email);

      setSuccess(
        "Password reset email has been sent. Please check your inbox."
      );
    } catch (err: any) {
      switch (err.code) {
        case "auth/user-not-found":
          setError("No account found with this email.");
          break;

        case "auth/invalid-email":
          setError("Invalid email address.");
          break;

        default:
          setError("Unable to send reset email.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#07142D] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#2563EB]">
            EarnNova
          </h1>

          <p className="text-gray-500 mt-2">
            Reset your password
          </p>
        </div>

        {error && (
          <div className="mt-6 rounded-xl bg-red-100 border border-red-300 p-3 text-red-700">
            {error}
          </div>
        )}

        {success && (
          <div className="mt-6 rounded-xl bg-green-100 border border-green-300 p-3 text-green-700">
            {success}
          </div>
        )}

        <form onSubmit={handleReset} className="space-y-5 mt-8">

          <div>
            <label className="block mb-2 font-medium">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-xl px-4 py-3 focus:border-blue-600 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            disabled={loading}
            className="w-full bg-[#2563EB] hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
          >
            {loading ? "Sending..." : "Send Reset Email"}
          </button>

        </form>

        <div className="mt-8 flex justify-between text-sm">
          <Link
            href="/login"
            className="text-[#2563EB] font-semibold"
          >
            Back to Login
          </Link>

          <Link
            href="/signup"
            className="text-[#2563EB] font-semibold"
          >
            Create Account
          </Link>
        </div>

      </div>
    </main>
  );
}