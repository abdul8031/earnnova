"use client";


import {useEffect,useState} from "react";

import {
collection,
getDocs,
doc,
updateDoc,
getDoc
}
from "firebase/firestore";

import {db} from "@/lib/firebase";



interface Withdraw{

id:string;

userId:string;

email:string;

amount:number;

method:string;

account:string;

status:string;

}



export default function WithdrawTable(){



const [withdraws,setWithdraws]
=
useState<Withdraw[]>([]);



useEffect(()=>{


async function load(){


const snap =
await getDocs(
collection(db,"withdraws")
);



const data =
snap.docs.map(d=>({

id:d.id,
...d.data()

})) as Withdraw[];



setWithdraws(data);


}



load();


},[]);







async function approve(item:Withdraw){



await updateDoc(

doc(
db,
"withdraws",
item.id
),

{
status:"approved"
}

);





const userRef =
doc(
db,
"users",
item.userId
);



const userSnap =
await getDoc(userRef);



if(userSnap.exists()){


const wallet =
userSnap.data().wallet || 0;



await updateDoc(

userRef,

{

wallet:
wallet-item.amount

}

);


}



}



async function reject(item:Withdraw){


await updateDoc(

doc(
db,
"withdraws",
item.id
),

{
status:"rejected"
}

);


}






return(

<div className="bg-white p-6 rounded-xl shadow">


<h2 className="text-2xl font-bold mb-5">
Withdraw Requests
</h2>



<table className="w-full">


<thead>

<tr className="border-b">

<th>Email</th>
<th>Amount</th>
<th>Method</th>
<th>Account</th>
<th>Status</th>
<th>Action</th>

</tr>

</thead>



<tbody>


{
withdraws.map(item=>(

<tr
key={item.id}
className="border-b"
>


<td>
{item.email}
</td>


<td>
${item.amount}
</td>


<td>
{item.method}
</td>


<td>
{item.account}
</td>


<td>
{item.status}
</td>


<td>


<button

onClick={()=>approve(item)}

className="bg-green-600 text-white px-3 py-1 rounded mr-2"

>
Approve
</button>



<button

onClick={()=>reject(item)}

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


)


}