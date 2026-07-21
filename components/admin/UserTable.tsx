"use client";

export default function UserTable() {
  return (
    <div className="bg-white rounded-xl shadow border overflow-hidden">
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold text-gray-800">
          Registered Users
        </h2>
        <p className="text-gray-500 mt-1">
          Manage all EarnNova users
        </p>
      </div>

      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-4">Name</th>
            <th className="text-left p-4">Email</th>
            <th className="text-left p-4">Balance</th>
            <th className="text-left p-4">Status</th>
            <th className="text-left p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-t">
            <td className="p-4">No users found.</td>
            <td className="p-4">-</td>
            <td className="p-4">$0</td>
            <td className="p-4">
              <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-700">
                Empty
              </span>
            </td>
            <td className="p-4">
              —
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}