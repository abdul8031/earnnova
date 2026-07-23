"use client";

import { useEffect, useState } from "react";

import {
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

import { db } from "@/lib/firebase";


interface Task {
  id:string;
  title:string;
  description?:string;
  category:string;
  reward:number;
  time:number;
  taskUrl:string;
}



export default function TasksPage(){

  const [tasks,setTasks] = useState<Task[]>([]);
  const [loading,setLoading] = useState(true);



  useEffect(()=>{


    const q = query(
      collection(db,"tasks"),
      where(
        "status",
        "==",
        "active"
      )
    );



    const unsubscribe = onSnapshot(
      q,
      (snapshot)=>{


        const data =
        snapshot.docs.map((doc)=>({

          id:doc.id,
          ...doc.data(),

        })) as Task[];



        setTasks(data);

        setLoading(false);


      }
    );



    return ()=>unsubscribe();


  },[]);




  if(loading){

    return(
      <div className="p-6">
        Loading tasks...
      </div>
    );

  }




  return(

    <div className="space-y-6">


      <div>

        <h1 className="text-3xl font-bold">
          Available Tasks
        </h1>


        <p className="text-gray-500">
          Complete tasks and earn rewards.
        </p>

      </div>




      <div className="grid md:grid-cols-2 gap-6">


      {
        tasks.map((task)=>(


          <div
            key={task.id}
            className="bg-white rounded-2xl shadow p-6"
          >


            <h2 className="text-xl font-bold">
              {task.title}
            </h2>



            <p className="text-gray-500 mt-2">
              {task.description}
            </p>



            <div className="mt-4 space-y-2">


              <p>
                Category:
                <b> {task.category}</b>
              </p>


              <p className="text-green-600 font-bold">
                Reward: ${task.reward}
              </p>


              <p>
                Time: {task.time}s
              </p>


            </div>



            <a
              href={task.taskUrl}
              target="_blank"
              className="block mt-5 text-center bg-blue-600 text-white rounded-lg py-3"
            >
              Start Task
            </a>


          </div>


        ))
      }


      </div>


    </div>

  );

}