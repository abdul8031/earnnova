export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-500">
          Welcome to the EarnNova Admin Panel.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="rounded-xl bg-white shadow p-6">
          <h3 className="text-gray-500">Total Users</h3>
          <p className="text-3xl font-bold">0</p>
        </div>

        <div className="rounded-xl bg-white shadow p-6">
          <h3 className="text-gray-500">Pending Withdrawals</h3>
          <p className="text-3xl font-bold">0</p>
        </div>

        <div className="rounded-xl bg-white shadow p-6">
          <h3 className="text-gray-500">Completed Withdrawals</h3>
          <p className="text-3xl font-bold">0</p>
        </div>

        <div className="rounded-xl bg-white shadow p-6">
          <h3 className="text-gray-500">Revenue</h3>
          <p className="text-3xl font-bold">$0</p>
        </div>
      </div>
    </div>
  );
}