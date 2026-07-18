"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiCheckSquare,
  FiBarChart2,
  FiUsers,
  FiCreditCard,
  FiDownload,
  FiUpload,
  FiShield,
  FiSettings,
  FiBell,
  FiLogOut,
} from "react-icons/fi";

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: FiHome },
  { name: "Tasks", href: "/dashboard/tasks", icon: FiCheckSquare },
  { name: "Surveys", href: "/dashboard/surveys", icon: FiBarChart2 },
  { name: "Referral", href: "/dashboard/referral", icon: FiUsers },
  { name: "Wallet", href: "/dashboard/wallet", icon: FiCreditCard },
  { name: "Deposit", href: "/dashboard/deposit", icon: FiDownload },
  { name: "Withdraw", href: "/dashboard/withdraw", icon: FiUpload },
  { name: "Verification", href: "/dashboard/verification", icon: FiShield },
  { name: "Notifications", href: "/dashboard/notifications", icon: FiBell },
  { name: "Settings", href: "/dashboard/settings", icon: FiSettings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-[#0F172A] text-white flex flex-col">
      <div className="h-16 flex items-center justify-center border-b border-slate-700">
        <h1 className="text-3xl font-bold">
          <span className="text-blue-500">Earn</span>Nova
        </h1>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                active
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-700">
        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-red-400 hover:bg-red-500 hover:text-white transition">
          <FiLogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}