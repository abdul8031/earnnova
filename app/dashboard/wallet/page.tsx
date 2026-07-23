"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";


export default function WalletPage() {

  const [wallet, setWallet] = useState(0);
  const [totalEarned, setTotalEarned] = useState(0);
  const [pendingBalance, setPendingBalance] = useState(0);

  const [loading, setLoading] = useState(true);



  useEffect(() => {

    const unsubscribe = onAuthStateChanged(
      auth,
      async (user) => {

        if (!user) {
          setLoading(false);
          return;
        }


        try {

          const userRef = doc(
            db,
            "users",
            user.uid
          );


          const snapshot = await getDoc(userRef);


          if(snapshot.exists()){

            const data = snapshot.data();


            setWallet(
              data.wallet || 0
            );


            setTotalEarned(
              data.totalEarned || 0
            );


            setPendingBalance(
              data.pendingBalance || 0
            );

          }


        } catch(error){

          console.log(error);

        } finally {

          setLoading(false);

        }

      }
    );


    return () => unsubscribe();


  }, []);





  if(loading){

    return (

      <div className="p-10 text-center">
        Loading Wallet...
      </div>

    );

  }




  return (

    <div className="space-y-8">


      <h1 className="text-3xl font-bold text-gray-800">
        My Wallet 💰
      </h1>




      <div className="grid gap-6 md:grid-cols-3">



        <div className="bg-white rounded-2xl shadow p-6">

          <p className="text-gray-500">
            Available Balance
          </p>

          <h2 className="text-4xl font-bold text-blue-600 mt-3">
            ${wallet}
          </h2>

        </div>




        <div className="bg-white rounded-2xl shadow p-6">

          <p className="text-gray-500">
            Total Earned
          </p>

          <h2 className="text-4xl font-bold text-green-600 mt-3">
            ${totalEarned}
          </h2>

        </div>




        <div className="bg-white rounded-2xl shadow p-6">

          <p className="text-gray-500">
            Pending Withdraw
          </p>

          <h2 className="text-4xl font-bold text-orange-500 mt-3">
            ${pendingBalance}
          </h2>

        </div>



      </div>





      <div className="bg-white rounded-2xl shadow p-6">


        <h2 className="text-xl font-bold mb-5">
          Wallet Actions
        </h2>



        <div className="flex gap-4 flex-wrap">


          <Link
            href="/dashboard/deposit"
            className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold"
          >
            💳 Deposit
          </Link>



          <Link
            href="/dashboard/withdraw"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold"
          >
            💸 Withdraw
          </Link>



        </div>


      </div>




      <div className="bg-white rounded-2xl shadow p-6">

        <h2 className="text-xl font-bold mb-4">
          Transaction History
        </h2>


        <p className="text-gray-500">
          No transactions yet.
        </p>


      </div>



    </div>

  );

}