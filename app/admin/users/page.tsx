import UserTable from "@/components/admin/UserTable";

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Users Management
        </h1>

        <p className="text-gray-500 mt-2">
          Manage all registered EarnNova users.
        </p>
      </div>

      <UserTable />
    </div>
  );
}