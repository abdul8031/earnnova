import Link from "next/link";
import TaskTable from "@/components/admin/tasks/TaskTable";

export const metadata = {
  title: "Task Management | EarnNova Admin",
};

export default function TasksPage() {
  return (
    <div className="p-6">

      <div className="mb-6 flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold">
            Task Management
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all earning tasks.
          </p>
        </div>

        <Link
          href="/admin/tasks/create"
          className="rounded-xl bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-700 transition"
        >
          + Create Task
        </Link>

      </div>


      <TaskTable />


    </div>
  );
}