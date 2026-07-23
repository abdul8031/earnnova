"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import {
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";


export default function EditTaskPage() {

  const params = useParams();
  const router = useRouter();

  const id = params.id as string;


  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);


  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [reward, setReward] = useState("");
  const [time, setTime] = useState("");
  const [dailyLimit, setDailyLimit] = useState("");
  const [taskUrl, setTaskUrl] = useState("");



  useEffect(() => {

    async function loadTask(){

      try{

        const snap = await getDoc(
          doc(db,"tasks",id)
        );


        if(snap.exists()){

          const data = snap.data();

          setTitle(data.title || "");
          setCategory(data.category || "");
          setReward(String(data.reward || ""));
          setTime(String(data.time || ""));
          setDailyLimit(String(data.dailyLimit || ""));
          setTaskUrl(data.taskUrl || "");

        }


      }catch(error){

        console.log(error);

      }finally{

        setLoading(false);

      }

    }


    if(id){
      loadTask();
    }


  },[id]);




  async function updateTask(
    e:React.FormEvent
  ){

    e.preventDefault();


    try{

      setSaving(true);


      await updateDoc(
        doc(db,"tasks",id),
        {

          title,

          category,

          reward:Number(reward),

          time:Number(time),

          dailyLimit:Number(dailyLimit),

          taskUrl,

          updatedAt:new Date(),

        }
      );


      router.push("/admin/tasks");


    }catch(error){

      console.log(
        "Update error:",
        error
      );

    }finally{

      setSaving(false);

    }

  }




  if(loading){

    return(
      <div className="p-6">
        Loading task...
      </div>
    );

  }



  return (

    <div className="p-6">


      <h1 className="text-3xl font-bold mb-6">
        Edit Task
      </h1>



      <form
        onSubmit={updateTask}
        className="bg-white rounded-2xl shadow p-6 space-y-5 max-w-xl"
      >


        <input
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          placeholder="Task Title"
          className="w-full border rounded-lg px-4 py-3"
        />



        <input
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
          placeholder="Category"
          className="w-full border rounded-lg px-4 py-3"
        />



        <input
          value={reward}
          onChange={(e)=>setReward(e.target.value)}
          placeholder="Reward"
          type="number"
          className="w-full border rounded-lg px-4 py-3"
        />



        <input
          value={time}
          onChange={(e)=>setTime(e.target.value)}
          placeholder="Time (seconds)"
          type="number"
          className="w-full border rounded-lg px-4 py-3"
        />



        <input
          value={dailyLimit}
          onChange={(e)=>setDailyLimit(e.target.value)}
          placeholder="Daily Limit"
          type="number"
          className="w-full border rounded-lg px-4 py-3"
        />



        <input
          value={taskUrl}
          onChange={(e)=>setTaskUrl(e.target.value)}
          placeholder="Task URL"
          className="w-full border rounded-lg px-4 py-3"
        />



        <button
          disabled={saving}
          className="w-full bg-blue-600 text-white rounded-lg py-3 font-semibold"
        >

          {
            saving
            ? "Updating..."
            : "Update Task"
          }

        </button>



      </form>


    </div>

  );

}