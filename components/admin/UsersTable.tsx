"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface User {
  id: string;
  email?: string;
  name?: string;
  role?: string;
  status?: string;
  createdAt?: any;
}

export default function UsersTable() {

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);


  async function fetchUsers() {
    try {

      const snapshot = await getDocs(
        collection(db, "users")
      );

      const usersData = snapshot.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      })) as User[];

      setUsers(usersData);

    } catch (error) {
      console.log("Users fetch error:", error);
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    fetchUsers();
  }, []);



  async function updateUserStatus(
    id: string,
    status: string
  ) {

    try {

      await updateDoc(
        doc(db, "users", id),
        {
          status: status,
        }
      );


      setUsers((prev) =>
        prev.map((user) =>
          user.id === id
            ? {
                ...user,
                status,
              }
            : user
        )
      );


    } catch (error) {
      console.log(error);
    }

  }



  if (loading) {
    return (
      <div className="bg-white p-5 rounded-xl shadow mt-6">
        Loading users...
      </div>
    );
  }



  return (

    <div className="bg-white p-5 rounded-xl shadow mt-6">

      <h2 className="text-xl font-bold mb-4">
        Users Management
      </h2>


      {users.length === 0 ? (

        <p className="text-gray-500">
          No users found.
        </p>

      ) : (


      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left p-3">
                Name
              </th>

              <th className="text-left p-3">
                Email
              </th>

              <th className="text-left p-3">
                Role
              </th>

              <th className="text-left p-3">
                Status
              </th>

              <th className="text-left p-3">
                Action
              </th>

            </tr>

          </thead>



          <tbody>

          {users.map((user)=>(

            <tr 
              key={user.id}
              className="border-b"
            >

              <td className="p-3">
                {user.name || "No Name"}
              </td>


              <td className="p-3">
                {user.email || "No Email"}
              </td>


              <td className="p-3">
                {user.role || "user"}
              </td>


              <td className="p-3">
                {user.status || "active"}
              </td>


              <td className="p-3">

                <button
                  onClick={() =>
                    updateUserStatus(
                      user.id,
                      "approved"
                    )
                  }
                  className="bg-green-600 text-white px-3 py-1 rounded mr-2"
                >
                  Approve
                </button>


                <button
                  onClick={() =>
                    updateUserStatus(
                      user.id,
                      "suspended"
                    )
                  }
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Suspend
                </button>

              </td>


            </tr>

          ))}

          </tbody>

        </table>

      </div>

      )}

    </div>

  );
}