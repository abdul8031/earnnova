"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import {
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import {
  doc,
  updateDoc,
} from "firebase/firestore";

import { auth, db } from "@/lib/firebase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // Refresh latest user data
      await user.reload();

      // Email verification check
      if (!auth.currentUser?.emailVerified) {
        await signOut(auth);

        router.push("/verify-email");

        return;
      }

      // Update Firestore
      await updateDoc(doc(db, "users", user.uid), {
        emailVerified: true,
      });

      router.push("/dashboard");
    } catch (err: unknown) {
      if (
        typeof err === "object" &&
        err !== null &&
        "code" in err
      ) {
        const firebaseError = err as {
          code: string;
        };

        switch (firebaseError.code) {
          case "auth/invalid-credential":
            setError("Invalid email or password.");
            break;

          case "auth/user-not-found":
            setError("User not found.");
            break;

          case "auth/wrong-password":
            setError("Incorrect password.");
            break;

          case "auth/too-many-requests":
            setError(
              "Too many login attempts. Please try again later."
            );
            break;

          default:
            setError("Login failed. Please try again.");
        }
      } else {
        setError("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#07142D] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600">
            EarnNova
          </h1>

          <p className="mt-2 text-gray-500">
            Welcome Back
          </p>
        </div>

        {error && (
          <div className="mt-6 rounded-xl border border-red-300 bg-red-100 p-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-5"
        >
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Signing In..." : "Login"}
          </button>
        </form>

        <div className="mt-5 text-center">
          <Link
            href="/forgot-password"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <p className="mt-8 text-center text-gray-500">
          Don't have an account?
          <Link
            href="/signup"
            className="ml-2 font-semibold text-blue-600"
          >
            Signup
          </Link>
        </p>
      </div>
    </main>
  );
}