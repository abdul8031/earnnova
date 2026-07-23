import TaskForm from "@/components/admin/tasks/TaskForm";

export default function CreateTaskPage() {
  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Create New Task
      </h1>

      <TaskForm />

    </div>
  );
}