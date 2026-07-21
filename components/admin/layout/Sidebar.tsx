"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  ShieldCheck,
  Wallet,
  Landmark,
  ListChecks,
  ClipboardList,
  Crown,
  Globe,
  Megaphone,
  BarChart3,
  Settings,
  Bell,
  Activity,
  KeyRound,
  LifeBuoy,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    title: "Main",
    items: [
      { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
      { name: "Users", href: "/admin/users", icon: Users },
      { name: "Verification", href: "/admin/verification", icon: ShieldCheck },
      { name: "Withdraw", href: "/admin/withdraw", icon: Wallet },
      { name: "Deposits", href: "/admin/deposits", icon: Landmark },
      { name: "Tasks", href: "/admin/tasks", icon: ListChecks },
      { name: "Surveys", href: "/admin/surveys", icon: ClipboardList },
      { name: "Membership", href: "/admin/membership", icon: Crown },
    ],
  },
  {
    title: "Management",
    items: [
      { name: "Website Builder", href: "/admin/website-builder", icon: Globe },
      { name: "Ads", href: "/admin/ads", icon: Megaphone },
      { name: "Reports", href: "/admin/reports", icon: BarChart3 },
      { name: "Notifications", href: "/admin/notifications", icon: Bell },
      { name: "Activity", href: "/admin/activity", icon: Activity },
      { name: "API Settings", href: "/admin/api-settings", icon: KeyRound },
      { name: "Support", href: "/admin/support", icon: LifeBuoy },
      { name: "Settings", href: "/admin/settings", icon: Settings },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-slate-900 text-white border-r border-slate-800 flex flex-col">
      <div className="h-16 flex items-center justify-center border-b border-slate-800">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-blue-500">
            EarnNova
          </h1>
          <p className="text-xs text-slate-400">
            Admin Panel
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-4 px-3">

        {menuItems.map((group) => (
          <div key={group.title} className="mb-6">

            <p className="px-3 mb-2 text-xs uppercase tracking-wider text-slate-500">
              {group.title}
            </p>

            <div className="space-y-1">

              {group.items.map((item) => {
                const Icon = item.icon;
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
                      active
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}

            </div>

          </div>
        ))}

      </div>

      <div className="border-t border-slate-800 p-3">
        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-300 hover:bg-red-600 hover:text-white transition">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}