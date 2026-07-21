import { ReactNode } from "react";
import AdminLayout from "@/components/admin/layout/AdminLayout";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <AdminLayout>{children}</AdminLayout>;
}