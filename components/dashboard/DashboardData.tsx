"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export interface DashboardUser {
  fullName: string;
  email: string;
  wallet: number;
  todayEarnings: number;
  totalEarned: number;
  pendingBalance: number;
  membership: string;
  totalReferrals: number;
}

export default function useDashboardData() {
  const [userData, setUserData] = useState<DashboardUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const docRef = doc(db, "users", user.uid);
        const snap = await getDoc(docRef);

        if (snap.exists()) {
          setUserData(snap.data() as DashboardUser);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    userData,
    loading,
  };
}