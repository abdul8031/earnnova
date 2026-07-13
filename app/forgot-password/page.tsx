"use client";

import { useState } from "react";
import Link from "next/link";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    try {
      setLoading(true);

      await sendPasswordResetEmail(auth, email.trim());

      setMessage(
        "Password reset email has been sent. Please check your inbox."
      );

      setEmail("");
    } catch (err: any) {
      switch (err.code) {
        case "auth/user-not-found":
          setError("No account found with this email.");
          break;

        case "auth/invalid-email":
          setError("Please enter a valid email address.");
          break;

        case "auth/too-many-requests":
          setError("Too many requests. Please try again later.");
          break;

        default:
          setError(err.message || "Unable to send password reset email.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#07142D] px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#2563EB]">EarnNova</h1>
          <p className="mt-2 text-gray-500">Reset your password</p>
        </div>

        {error && (
          <div className="mt-6 rounded-xl border border-red-300 bg-red-100 p-3 text-red-700">
            {error}
          </div>
        )}

        {message && (
          <div className="mt-6 rounded-xl border border-green-300 bg-green-100 p-3 text-green-700">
            {message}
          </div>
        )}

        <form onSubmit={handleReset} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block font-medium">Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-[#2563EB]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#2563EB] py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Reset Email"}
          </button>
        </form>

        <div className="mt-8 flex justify-between text-sm">
          <Link
            href="/login"
            className="font-semibold text-[#2563EB] hover:underline"
          >
            Back to Login
          </Link>

          <Link
            href="/signup"
            className="font-semibold text-[#2563EB] hover:underline"
          >
            Create Account
          </Link>
        </div>
      </div>
    </main>
  );
}