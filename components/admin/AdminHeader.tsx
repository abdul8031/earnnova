export default function AdminHeader() {
  return (
    <header className="bg-white shadow p-5 flex justify-between">
      <h2 className="text-xl font-semibold">
        Dashboard
      </h2>

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Admin
      </button>
    </header>
  );
}