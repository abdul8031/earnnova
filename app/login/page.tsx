"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { auth } from "@/lib/firebase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      router.push("/dashboard");
    } catch (err: any) {
      switch (err.code) {
        case "auth/invalid-credential":
          setError("Invalid email or password.");
          break;

        case "auth/user-not-found":
          setError("User not found.");
          break;

        case "auth/wrong-password":
          setError("Wrong password.");
          break;

        default:
          setError("Login failed.");
      }
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[#07142D] flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

        <div className="text-center">

          <h1 className="text-4xl font-bold text-blue-600">
            EarnNova
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome Back
          </p>

        </div>

        {error && (
          <div className="mt-6 bg-red-100 border border-red-300 rounded-xl p-3 text-red-700 text-sm">
            {error}
          </div>
        )}

        <form
          onSubmit={handleLogin}
          className="space-y-5 mt-8"
        >

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-xl px-4 py-3"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-xl px-4 py-3"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-semibold"
          >
            {loading ? "Signing In..." : "Login"}
          </button>

        </form>

        <p className="text-center mt-8 text-gray-500">

          Don't have an account?

          <Link
            href="/signup"
            className="text-blue-600 font-semibold ml-2"
          >
            Signup
          </Link>

        </p>

      </div>

    </main>
  );
}