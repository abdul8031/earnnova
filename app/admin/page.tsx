import AdminGuard from "./AdminGuard";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import StatsCard from "@/components/admin/StatsCard";
import UsersTable from "@/components/admin/UsersTable";

export default function AdminPage() {
  return (
    <AdminGuard>
      <div className="flex min-h-screen bg-gray-100">
        <AdminSidebar />

        <div className="flex-1">
          <AdminHeader />

          <main className="p-6">
            <h1 className="text-3xl font-bold mb-6">
              EarnNova Admin Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              <StatsCard 
                title="Total Users" 
                value="0" 
              />

              <StatsCard 
                title="Active Users" 
                value="0" 
              />

              <StatsCard 
                title="Withdraw Requests" 
                value="0" 
              />

              <StatsCard 
                title="Total Earnings" 
                value="$0" 
              />
            </div>

            <UsersTable />

          </main>
        </div>
      </div>
    </AdminGuard>
  );
}