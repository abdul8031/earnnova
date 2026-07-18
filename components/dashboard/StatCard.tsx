interface StatCardProps {
  title: string;
  value: string;
  icon: string;
  borderColor: string;
}

export default function StatCard({
  title,
  value,
  icon,
  borderColor,
}: StatCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl border-l-4 ${borderColor} p-6 shadow-sm hover:shadow-xl transition-all duration-300`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-3">
            {value}
          </h2>
        </div>

        <div className="text-4xl">
          {icon}
        </div>
      </div>
    </div>
  );
}