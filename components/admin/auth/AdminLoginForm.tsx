"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function AdminLoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // Admin email check
      const adminEmails = [
        "admin@earnnova.site",
      ];

      if (!adminEmails.includes(user.email || "")) {
        setError("You are not authorized as admin.");
        setLoading(false);
        return;
      }

      router.push("/admin/dashboard");

    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-2xl font-bold text-center mb-6">
          Admin Login
        </h1>


        {error && (
          <div className="mb-4 rounded-lg bg-red-100 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}


        <form onSubmit={handleLogin} className="space-y-4">


          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@email.com"
              required
              className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>


          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              required
              className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>


          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>


        </form>

      </div>

    </div>
  );
}