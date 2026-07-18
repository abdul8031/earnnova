import type { ReactNode } from "react";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0F172A] text-white hidden lg:flex flex-col">
        <div className="h-16 flex items-center justify-center border-b border-slate-700">
          <h1 className="text-2xl font-bold text-blue-500">
            Earn<span className="text-white">Nova</span>
          </h1>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <Link href="/dashboard" className="block px-4 py-3 rounded-lg hover:bg-blue-600">
            Dashboard
          </Link>

          <Link href="/dashboard/tasks" className="block px-4 py-3 rounded-lg hover:bg-blue-600">
            Tasks
          </Link>

          <Link href="/dashboard/surveys" className="block px-4 py-3 rounded-lg hover:bg-blue-600">
            Surveys
          </Link>

          <Link href="/dashboard/referral" className="block px-4 py-3 rounded-lg hover:bg-blue-600">
            Referral
          </Link>

          <Link href="/dashboard/wallet" className="block px-4 py-3 rounded-lg hover:bg-blue-600">
            Wallet
          </Link>

          <Link href="/dashboard/deposit" className="block px-4 py-3 rounded-lg hover:bg-blue-600">
            Deposit
          </Link>

          <Link href="/dashboard/withdraw" className="block px-4 py-3 rounded-lg hover:bg-blue-600">
            Withdraw
          </Link>

          <Link href="/dashboard/verification" className="block px-4 py-3 rounded-lg hover:bg-blue-600">
            Verification
          </Link>

          <Link href="/dashboard/settings" className="block px-4 py-3 rounded-lg hover:bg-blue-600">
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="h-16 bg-white shadow flex items-center justify-between px-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Customer Dashboard
          </h2>

          <div className="flex items-center gap-4">
            <button className="relative">
              🔔
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
                3
              </span>
            </button>

            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
              U
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}