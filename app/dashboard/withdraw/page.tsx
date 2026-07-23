"use client";

import { useState } from "react";
import { auth, db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";


export default function WithdrawPage(){

const router = useRouter();


const [method,setMethod] = useState("");

const [amount,setAmount] = useState("");

const [account,setAccount] = useState("");

const [loading,setLoading] = useState(false);



async function submitWithdraw(
e:React.FormEvent
){

e.preventDefault();


const user = auth.currentUser;


if(!user){

alert("Login required");
return;

}


if(!method || !amount || !account){

alert("Fill all fields");
return;

}



try{

setLoading(true);



await addDoc(

collection(db,"withdraws"),

{


userId:user.uid,

email:user.email,

amount:Number(amount),

method,

account,


status:"pending",


createdAt:
serverTimestamp()


}

);



alert(
"Withdraw request submitted"
);


router.push("/dashboard");


}

catch(error){

console.log(error);

alert(
"Something went wrong"
);

}

finally{

setLoading(false);

}



}




return(

<div className="space-y-6">


<h1 className="text-3xl font-bold">
Withdraw Money 💸
</h1>



<form

onSubmit={submitWithdraw}

className="bg-white p-6 rounded-2xl shadow space-y-5"

>


<select

value={method}

onChange={(e)=>
setMethod(e.target.value)
}

className="w-full border rounded-xl p-3"

>


<option value="">
Select Method
</option>


<option value="USDT TRC20">
USDT TRC20
</option>


<option value="JazzCash">
JazzCash
</option>


<option value="EasyPaisa">
EasyPaisa
</option>


</select>





<input

type="number"

placeholder="Withdraw Amount"

value={amount}

onChange={(e)=>
setAmount(e.target.value)
}

className="w-full border rounded-xl p-3"

/>





<input

placeholder="Wallet Address / Account Number"

value={account}

onChange={(e)=>
setAccount(e.target.value)
}

className="w-full border rounded-xl p-3"

/>





<button

disabled={loading}

className="bg-blue-600 text-white px-6 py-3 rounded-xl"

>

{
loading
?
"Submitting..."
:
"Request Withdraw"
}


</button>



</form>


</div>


);


}