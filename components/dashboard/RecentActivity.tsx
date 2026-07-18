export default function RecentActivity() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Recent Activity
      </h2>

      <div className="space-y-4">
        <div className="border-b pb-3 text-gray-600">
          No activity yet.
        </div>

        <div className="border-b pb-3 text-gray-600">
          Complete your first task to start earning.
        </div>

        <div className="text-gray-600">
          Referral rewards will appear here.
        </div>
      </div>
    </div>
  );
}