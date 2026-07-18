export default function DashboardPage() {
  const cards = [
    {
      title: "Wallet Balance",
      value: "$0.00",
      icon: "💳",
      border: "border-blue-600",
    },
    {
      title: "Today's Earnings",
      value: "$0.00",
      icon: "💵",
      border: "border-emerald-500",
    },
    {
      title: "Total Earnings",
      value: "$0.00",
      icon: "📈",
      border: "border-indigo-600",
    },
    {
      title: "Pending Withdraw",
      value: "$0.00",
      icon: "⏳",
      border: "border-amber-500",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome Back 👋
        </h1>

        <p className="text-gray-500 mt-2 text-lg">
          Manage your earnings, tasks and wallet from your dashboard.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`bg-white border-l-4 ${card.border} rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300`}
          >
            <div className="flex items-center justify-between">
              <p className="text-gray-500 font-medium">
                {card.title}
              </p>

              <span className="text-3xl">
                {card.icon}
              </span>
            </div>

            <h2 className="text-4xl font-bold text-gray-800 mt-5">
              {card.value}
            </h2>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Quick Actions
          </h2>

          <div className="grid grid-cols-2 gap-4">

            <button className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white py-3 font-semibold transition duration-300">
              🚀 Start Tasks
            </button>

            <button className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white py-3 font-semibold transition duration-300">
              📋 Complete Survey
            </button>

            <button className="rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white py-3 font-semibold transition duration-300">
              👥 Invite Friends
            </button>

            <button className="rounded-xl bg-amber-500 hover:bg-amber-600 text-white py-3 font-semibold transition duration-300">
              💸 Withdraw
            </button>

          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Recent Activity
          </h2>

          <div className="space-y-4">

            <div className="flex items-center justify-between border-b pb-3">
              <span className="text-gray-600">
                No activity yet.
              </span>
            </div>

            <div className="flex items-center justify-between border-b pb-3">
              <span className="text-gray-600">
                Complete your first task to start earning.
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-600">
                Referral rewards will appear here.
              </span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}