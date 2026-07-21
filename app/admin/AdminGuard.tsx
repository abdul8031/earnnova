"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function AdminGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAdmin() {
      const user = auth.currentUser;

      if (!user) {
        router.push("/login");
        return;
      }

      const userDoc = await getDoc(
        doc(db, "users", user.uid)
      );

      if (!userDoc.exists() || userDoc.data().role !== "admin") {
        router.push("/");
        return;
      }

      setLoading(false);
    }

    checkAdmin();
  }, [router]);

  if (loading) {
    return (
      <div className="p-10">
        Checking Admin Access...
      </div>
    );
  }

  return children;
}