import Link from "next/link";
import TaskForm from "@/components/admin/tasks/TaskForm";

export const metadata = {
  title: "Create Task | EarnNova Admin",
};

export default function CreateTaskPage() {
  return (
    <div className="p-6">

      <div className="mb-6 flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold">
            Create New Task
          </h1>

          <p className="mt-2 text-gray-500">
            Create a new earning task for EarnNova users.
          </p>
        </div>

        <Link
          href="/admin/tasks"
          className="rounded-lg bg-gray-200 px-5 py-3 font-semibold hover:bg-gray-300"
        >
          ← Back
        </Link>

      </div>

      <TaskForm />

    </div>
  );
}