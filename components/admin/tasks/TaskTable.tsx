"use client";

import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import { Task } from "./TaskTypes";


export default function TaskTable() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");


  useEffect(() => {

    const q = query(
      collection(db, "tasks"),
      orderBy("createdAt", "desc")
    );


    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {

        const data = snapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        })) as Task[];


        setTasks(data);
        setLoading(false);

      },
      (error) => {

        console.log(
          "Task fetch error:",
          error
        );

        setLoading(false);

      }
    );


    return () => unsubscribe();

  }, []);



  async function toggleStatus(
    id: string,
    currentStatus: string
  ) {

    try {

      const taskRef = doc(
        db,
        "tasks",
        id
      );


      await updateDoc(taskRef, {

        status:
          currentStatus === "active"
            ? "inactive"
            : "active",

      });


    } catch(error) {

      console.log(
        "Status update error:",
        error
      );

    }

  }



  async function deleteTask(id:string) {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );


    if(!confirmDelete) return;


    try {

      await deleteDoc(
        doc(db,"tasks",id)
      );


    } catch(error) {

      console.log(
        "Delete error:",
        error
      );

    }

  }



  const filteredTasks = tasks.filter((task) =>
    task.title
      ?.toLowerCase()
      .includes(
        search.toLowerCase()
      )
  );



  if (loading) {

    return (
      <div className="bg-white rounded-xl shadow p-6">
        Loading tasks...
      </div>
    );

  }



  return (

    <div className="bg-white rounded-2xl shadow p-6">


      <div className="mb-5">

        <input

          type="text"

          placeholder="Search tasks..."

          value={search}

          onChange={(e)=>
            setSearch(e.target.value)
          }

          className="w-full md:w-96 rounded-lg border px-4 py-3"

        />

      </div>



      {
        filteredTasks.length === 0 ?


        (

          <div className="text-center py-10 text-gray-500">

            No tasks found.

          </div>

        )


        :


        (

        <div className="overflow-x-auto">


          <table className="w-full">


            <thead>

              <tr className="border-b">


                <th className="text-left p-3">
                  Title
                </th>


                <th className="text-left p-3">
                  Category
                </th>


                <th className="text-left p-3">
                  Reward
                </th>


                <th className="text-left p-3">
                  Time
                </th>


                <th className="text-left p-3">
                  Status
                </th>


                <th className="text-left p-3">
                  Actions
                </th>


              </tr>

            </thead>



            <tbody>


            {
              filteredTasks.map((task)=>(


                <tr
                  key={task.id}
                  className="border-b hover:bg-gray-50"
                >


                  <td className="p-3 font-semibold">
                    {task.title}
                  </td>



                  <td className="p-3">
                    {task.category}
                  </td>



                  <td className="p-3 text-green-600 font-bold">
                    ${task.reward}
                  </td>



                  <td className="p-3">
                    {task.time}s
                  </td>



                  <td className="p-3">


                    {
                      task.status === "active"


                      ?

                      <span className="rounded-full bg-green-100 px-3 py-1 text-green-700">
                        Active
                      </span>


                      :


                      <span className="rounded-full bg-red-100 px-3 py-1 text-red-700">
                        Inactive
                      </span>

                    }


                  </td>




                  <td className="p-3 space-x-2">


                    <button

                      onClick={() =>
                        toggleStatus(
                          task.id,
                          task.status
                        )
                      }

                      className="rounded bg-blue-600 px-3 py-1 text-white"

                    >

                      {
                        task.status === "active"
                        ? "Disable"
                        : "Enable"
                      }

                    </button>



                    <button

                      onClick={() =>
                        deleteTask(task.id)
                      }

                      className="rounded bg-red-600 px-3 py-1 text-white"

                    >

                      Delete

                    </button>


                  </td>


                </tr>


              ))
            }


            </tbody>


          </table>


        </div>

        )

      }


    </div>

  );

}