"use client";

import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  getDoc
} from "firebase/firestore";

import { db } from "@/lib/firebase";


interface Deposit {

  id:string;
  userId:string;
  email?:string;
  amount:number;
  category?:string;
  method?:string;
  transactionId?:string;
  screenshot?:string;
  status?:string;

}



export default function DepositTable(){

  const [deposits,setDeposits] =
  useState<Deposit[]>([]);


  const [loading,setLoading] =
  useState(true);



  async function fetchDeposits(){

    try{

      const snapshot =
      await getDocs(
        collection(db,"deposits")
      );


      const data =
      snapshot.docs.map((item)=>({

        id:item.id,
        ...item.data()

      })) as Deposit[];


      setDeposits(data);


    }catch(error){

      console.log(error);

    }
    finally{

      setLoading(false);

    }

  }





  useEffect(()=>{

    fetchDeposits();

  },[]);






  async function updateDeposit(
    item:Deposit,
    status:string
  ){

    try{


      await updateDoc(
        doc(db,"deposits",item.id),
        {
          status
        }
      );



      // Wallet update on approval

      if(status==="approved"){


        const userRef =
        doc(
          db,
          "users",
          item.userId
        );


        const userSnap =
        await getDoc(userRef);



        if(userSnap.exists()){


          const currentWallet =
          userSnap.data().wallet || 0;



          await updateDoc(
            userRef,
            {

              wallet:
              currentWallet + item.amount

            }
          );


        }


      }





      setDeposits((prev)=>

        prev.map((deposit)=>

          deposit.id===item.id

          ? {
              ...deposit,
              status
            }

          : deposit

        )

      );



    }catch(error){

      console.log(error);

    }


  }






  if(loading){

    return(
      <div className="bg-white p-5 rounded-xl shadow">
        Loading deposits...
      </div>
    )

  }





return(

<div className="bg-white rounded-xl shadow p-6">


<h2 className="text-2xl font-bold mb-5">
Deposit Requests
</h2>



<div className="overflow-x-auto">


<table className="w-full">


<thead>

<tr className="border-b">


<th className="p-3 text-left">
Email
</th>


<th className="p-3 text-left">
Amount
</th>


<th className="p-3 text-left">
Method
</th>


<th className="p-3 text-left">
Proof
</th>


<th className="p-3 text-left">
Status
</th>


<th className="p-3 text-left">
Action
</th>


</tr>

</thead>





<tbody>


{
deposits.map((item)=>(


<tr
key={item.id}
className="border-b"
>



<td className="p-3">
{item.email}
</td>



<td className="p-3">
${item.amount}
</td>



<td className="p-3">
{item.method}
</td>



<td className="p-3">


{
item.screenshot &&

<a

href={item.screenshot}

target="_blank"

className="text-blue-600 underline"

>
View
</a>

}


</td>



<td className="p-3">
{item.status || "pending"}
</td>



<td className="p-3">


<button

onClick={()=>updateDeposit(item,"approved")}

className="bg-green-600 text-white px-3 py-1 rounded mr-2"

>

Approve

</button>




<button

onClick={()=>updateDeposit(item,"rejected")}

className="bg-red-600 text-white px-3 py-1 rounded"

>

Reject

</button>



</td>



</tr>


))

}



</tbody>



</table>


</div>



</div>

)


}