"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";


export default function TaskForm() {

  const router = useRouter();


  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Website");
  const [description, setDescription] = useState("");
  const [reward, setReward] = useState("");
  const [time, setTime] = useState("");
  const [dailyLimit, setDailyLimit] = useState("");
  const [taskUrl, setTaskUrl] = useState("");

  const [loading, setLoading] = useState(false);



  async function createTask(
    e: React.FormEvent
  ){

    e.preventDefault();


    try {

      setLoading(true);


      await addDoc(
        collection(db,"tasks"),
        {

          title,

          category,

          description,

          reward:Number(reward),

          time:Number(time),

          dailyLimit:Number(dailyLimit),

          taskUrl,

          status:"active",

          clicks:0,

          completions:0,

          createdAt:serverTimestamp(),

          updatedAt:serverTimestamp(),

        }
      );


      router.push("/admin/tasks");


    } catch(error){

      console.log(
        "Create task error:",
        error
      );


    } finally {

      setLoading(false);

    }

  }



  return (

    <form
      onSubmit={createTask}
      className="max-w-xl bg-white rounded-2xl shadow p-6 space-y-5"
    >


      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        className="w-full border rounded-lg px-4 py-3"
        required
      />



      <select
        value={category}
        onChange={(e)=>setCategory(e.target.value)}
        className="w-full border rounded-lg px-4 py-3"
      >

        <option>
          Website
        </option>

        <option>
          Video
        </option>

        <option>
          Survey
        </option>

        <option>
          App
        </option>

        <option>
          Social Media
        </option>

      </select>




      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        className="w-full border rounded-lg px-4 py-3"
      />




      <input
        type="number"
        placeholder="Reward ($)"
        value={reward}
        onChange={(e)=>setReward(e.target.value)}
        className="w-full border rounded-lg px-4 py-3"
        required
      />




      <input
        type="number"
        placeholder="Time (seconds)"
        value={time}
        onChange={(e)=>setTime(e.target.value)}
        className="w-full border rounded-lg px-4 py-3"
        required
      />




      <input
        type="number"
        placeholder="Daily Limit"
        value={dailyLimit}
        onChange={(e)=>setDailyLimit(e.target.value)}
        className="w-full border rounded-lg px-4 py-3"
      />




      <input
        type="url"
        placeholder="Task URL"
        value={taskUrl}
        onChange={(e)=>setTaskUrl(e.target.value)}
        className="w-full border rounded-lg px-4 py-3"
      />




      <button
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 font-semibold"
      >

        {
          loading
          ? "Creating..."
          : "Create Task"
        }

      </button>



    </form>

  );

}