"use client";

export default function AdminLoginForm() {
  return (
    <div className="w-full max-w-md rounded-2xl bg-white shadow-xl p-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-blue-600">
          EarnNova Admin
        </h1>

        <p className="mt-2 text-gray-500">
          Sign in to your admin dashboard
        </p>
      </div>

      <form className="space-y-5">

        <div>
          <label className="block mb-2 text-sm font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="admin@earnnova.site"
            className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">
            Password
          </label>

          <input
            type="password"
            placeholder="********"
            className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Login
        </button>

      </form>
    </div>
  );
}