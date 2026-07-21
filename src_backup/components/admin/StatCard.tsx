interface Props {
  title: string;
  value: string;
}

export default function StatCard({ title, value }: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-gray-500 text-sm">
        {title}
      </h2>

      <p className="text-3xl font-bold mt-3 text-blue-600">
        {value}
      </p>
    </div>
  );
}