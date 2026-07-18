"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function UserProfile() {
  const [name, setName] = useState("User");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setName(user.displayName || "User");
        setEmail(user.email || "");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
        {name.charAt(0).toUpperCase()}
      </div>

      <div className="hidden md:block">
        <p className="font-semibold text-gray-800">
          {name}
        </p>

        <p className="text-sm text-gray-500">
          {email}
        </p>
      </div>
    </div>
  );
}