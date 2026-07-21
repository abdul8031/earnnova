export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-blue-600 text-white min-h-screen p-5">
      <h2 className="text-2xl font-bold mb-8">
        EarnNova Admin
      </h2>

      <nav className="space-y-4">
        <p>Dashboard</p>
        <p>Users</p>
        <p>KYC Verification</p>
        <p>Withdraw Requests</p>
        <p>Deposits</p>
        <p>Wallet Control</p>
        <p>Website Settings</p>
        <p>Ads Management</p>
      </nav>
    </aside>
  );
}