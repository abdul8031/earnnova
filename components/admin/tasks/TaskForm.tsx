"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Website");
  const [reward, setReward] = useState("");
  const [time, setTime] = useState("");
  const [dailyLimit, setDailyLimit] = useState("");
  const [taskUrl, setTaskUrl] = useState("");
  const [status, setStatus] = useState("active");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function createTask(e: React.FormEvent) {
    e.preventDefault();

    setMessage("");

    if (
      !title ||
      !description ||
      !reward ||
      !time ||
      !dailyLimit ||
      !taskUrl
    ) {
      setMessage("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "tasks"), {
        title,
        description,
        category,
        reward: Number(reward),
        time: Number(time),
        dailyLimit: Number(dailyLimit),
        taskUrl,
        status,
        clicks: 0,
        completions: 0,
        createdAt: serverTimestamp(),
      });

      setTitle("");
      setDescription("");
      setCategory("Website");
      setReward("");
      setTime("");
      setDailyLimit("");
      setTaskUrl("");
      setStatus("active");

      setMessage("✅ Task created successfully.");

    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to create task.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={createTask}
      className="rounded-2xl bg-white p-6 shadow space-y-5"
    >
      <h2 className="text-2xl font-bold">
        Create New Task
      </h2>

      {message && (
        <div className="rounded-lg bg-slate-100 p-3">
          {message}
        </div>
      )}

      <input
        className="w-full rounded-lg border p-3"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full rounded-lg border p-3"
        placeholder="Description"
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select
        className="w-full rounded-lg border p-3"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Website</option>
        <option>Video</option>
        <option>App</option>
        <option>Social</option>
        <option>Referral</option>
      </select>

      <input
        type="number"
        className="w-full rounded-lg border p-3"
        placeholder="Reward ($)"
        value={reward}
        onChange={(e) => setReward(e.target.value)}
      />

      <input
        type="number"
        className="w-full rounded-lg border p-3"
        placeholder="Time (seconds)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <input
        type="number"
        className="w-full rounded-lg border p-3"
        placeholder="Daily Limit"
        value={dailyLimit}
        onChange={(e) => setDailyLimit(e.target.value)}
      />

      <input
        className="w-full rounded-lg border p-3"
        placeholder="Task URL"
        value={taskUrl}
        onChange={(e) => setTaskUrl(e.target.value)}
      />

      <select
        className="w-full rounded-lg border p-3"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>

      <button
        disabled={loading}
        className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
      >
        {loading ? "Creating..." : "Create Task"}
      </button>
    </form>
  );
}