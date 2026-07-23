"use client";

import { useEffect, useState } from "react";

import AdminGuard from "./AdminGuard";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import StatsCard from "@/components/admin/StatsCard";
import UsersTable from "@/components/admin/UsersTable";

import { db } from "@/lib/firebase";
import { collection, getCountFromServer } from "firebase/firestore";

export default function AdminPage() {

  const [totalUsers, setTotalUsers] = useState("0");

  useEffect(() => {
  async function getUsersCount() {
    try {
      const usersRef = collection(db, "users");

      const snapshot = await getCountFromServer(usersRef);

      console.log(
        "Firebase Users Count:",
        snapshot.data().count
      );

      setTotalUsers(
        snapshot.data().count.toString()
      );

    } catch (error) {
      console.log("Users count error:", error);
    }
  }

  getUsersCount();

}, []);


  return (
    <AdminGuard>

      <div className="flex min-h-screen bg-gray-100">

        <AdminSidebar />

        <div className="flex-1">

          <AdminHeader />

          <main className="p-6">

            <h1 className="text-3xl font-bold mb-6">
              EarnNova Admin Dashboard
            </h1>


            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

              <StatsCard
                title="Total Users"
                value={totalUsers}
              />


              <StatsCard
                title="Active Users"
                value="0"
              />


              <StatsCard
                title="Withdraw Requests"
                value="0"
              />


              <StatsCard
                title="Total Earnings"
                value="$0"
              />

            </div>


            <UsersTable />


          </main>

        </div>

      </div>

    </AdminGuard>
  );
}