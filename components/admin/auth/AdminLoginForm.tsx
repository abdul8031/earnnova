"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { auth, db } from "@/lib/firebase";

import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export default function AdminLoginForm() {
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
      if (email !== "allverzo0@gmail.com") {
        throw new Error("Access Denied");
      }

      const result = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userDoc = await getDoc(
        doc(db, "users", result.user.uid)
      );

      if (
        !userDoc.exists() ||
        userDoc.data().role !== "admin"
      ) {
        throw new Error("You are not an admin.");
      }

      router.push("/admin");
    } catch (err: any) {
      setError(err.message || "Login Failed");
    }

    setLoading(false);
  }

  return (
    <div className="w-full max-w-md rounded-2xl bg-white shadow-xl p-8">

      <h1 className="mb-8 text-center text-3xl font-bold text-blue-600">
        EarnNova Admin
      </h1>

      <form onSubmit={handleLogin} className="space-y-5">

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border p-3"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border p-3"
        />

        {error && (
          <p className="text-red-600 text-sm">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white"
        >
          {loading ? "Please Wait..." : "Login"}
        </button>

      </form>

    </div>
  );
}