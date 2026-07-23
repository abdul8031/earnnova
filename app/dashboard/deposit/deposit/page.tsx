"use client";

import { useState } from "react";
import { auth, db, storage } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useRouter } from "next/navigation";


export default function DepositPage() {

  const router = useRouter();

  const [category, setCategory] = useState("");

  const [amount, setAmount] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const [screenshot, setScreenshot] =
    useState<File | null>(null);

  const [loading, setLoading] = useState(false);



  const cryptoAddress =
    "TAUgQk5vdz964jxps2nYjTAj6c8WRpp4hb";


  const iban =
    "PK07UMBL0000031096323748";



  async function copyText(text:string){

    await navigator.clipboard.writeText(text);

    alert("Copied!");
  }




  async function submitDeposit(
    e:React.FormEvent
  ){

    e.preventDefault();


    const user = auth.currentUser;


    if(!user){

      alert("Please login first");
      return;

    }


    if(!category || !amount || !screenshot){

      alert("Please complete all fields");
      return;

    }



    try{

      setLoading(true);


      let screenshotURL = "";



      // Upload Screenshot

      const imageRef = ref(
        storage,
        `deposits/${user.uid}/${Date.now()}`
      );


      await uploadBytes(
        imageRef,
        screenshot
      );


      screenshotURL =
        await getDownloadURL(imageRef);





      await addDoc(
        collection(db,"deposits"),
        {

          userId:user.uid,

          email:user.email,


          amount:Number(amount),


          category,


          method:
          category === "crypto"
          ? "USDT TRC20"
          : "Bank Deposit",



          transactionId,


          screenshot:screenshotURL,


          status:"pending",


          createdAt:
          serverTimestamp()

        }
      );



      alert(
        "Deposit request submitted"
      );


      router.push("/dashboard");


    }catch(error){

      console.log(error);

      alert(
        "Something went wrong"
      );


    }finally{

      setLoading(false);

    }

  }





return (

<div className="space-y-8">


<h1 className="text-3xl font-bold">
Deposit Funds 💰
</h1>



<div className="bg-white rounded-2xl shadow p-6">


<h2 className="font-bold text-xl mb-4">
Select Deposit Method
</h2>


<select

value={category}

onChange={(e)=>
setCategory(e.target.value)
}

className="w-full border rounded-xl p-3"

>

<option value="">
Select Category
</option>


<option value="crypto">
Crypto (USDT)
</option>


<option value="bank">
Bank Deposit
</option>


</select>


</div>






{category === "crypto" && (

<div className="bg-white rounded-2xl shadow p-6">


<h2 className="text-xl font-bold">
USDT Deposit
</h2>


<p className="mt-3">
Network: <b>TRON (TRC20)</b>
</p>



<div className="mt-4">

<p className="text-gray-500">
Deposit Address
</p>


<div className="flex gap-2 mt-2">

<input

readOnly

value={cryptoAddress}

className="border rounded-xl p-3 flex-1"

/>


<button

onClick={()=>
copyText(cryptoAddress)
}

className="bg-blue-600 text-white px-4 rounded-xl"

>

Copy

</button>


</div>


</div>


</div>

)}







{category === "bank" && (

<div className="bg-white rounded-2xl shadow p-6">


<h2 className="text-xl font-bold">
Bank Deposit
</h2>


<p className="mt-3">
Bank:
<b> U Microfinance Bank</b>
</p>


<p>
Account Title:
<b> ASIFA SALEEM</b>
</p>



<div className="flex gap-2 mt-4">

<input

readOnly

value={iban}

className="border rounded-xl p-3 flex-1"

/>


<button

onClick={()=>
copyText(iban)
}

className="bg-blue-600 text-white px-4 rounded-xl"

>

Copy IBAN

</button>


</div>


</div>

)}






<form

onSubmit={submitDeposit}

className="bg-white rounded-2xl shadow p-6 space-y-5"

>


<input

type="number"

placeholder="Deposit Amount"

value={amount}

onChange={(e)=>
setAmount(e.target.value)
}

className="w-full border rounded-xl p-3"

/>





<input

type="text"

placeholder="Transaction ID"

value={transactionId}

onChange={(e)=>
setTransactionId(e.target.value)
}

className="w-full border rounded-xl p-3"

/>





<div>

<label className="block mb-2 font-medium">

Upload Screenshot

</label>


<input

type="file"

accept="image/*"

onChange={(e)=>
setScreenshot(
e.target.files?.[0] || null
)
}

/>


</div>





<button

disabled={loading}

className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold"

>

{loading
? "Submitting..."
: "Submit Deposit"
}


</button>



</form>



</div>

);

}