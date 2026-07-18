"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";

interface WithdrawRequest {
  id: string;
  amount: number;
  method: string;
  status: string;
}

export default function WithdrawHistory() {
  const [history, setHistory] = useState<WithdrawRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHistory = async () => {
      if (!auth.currentUser) {
        setLoading(false);
        return;
      }

      try {
        const q = query(
          collection(db, "withdrawRequests"),
          where("userId", "==", auth.currentUser.uid),
          orderBy("createdAt", "desc")
        );

        const snap = await getDocs(q);

        const data = snap.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<WithdrawRequest, "id">),
        }));

        setHistory(data);
      } finally {
        setLoading(false);
      }
    };

    loadHistory();
  }, []);

  if (loading) {
    return (
      <div className="p-6 text-center">
        Loading history...
      </div>
    );
  }

  if (history.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        No withdrawal requests yet.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="border-b">
          <tr>
            <th className="p-4 text-left">Amount</th>
            <th className="p-4 text-left">Method</th>
            <th className="p-4 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {history.map((item) => (
            <tr
              key={item.id}
              className="border-b hover:bg-gray-50"
            >
              <td className="p-4">
                ${item.amount}
              </td>

              <td className="p-4">
                {item.method}
              </td>

              <td className="p-4">
                <span
                  className={`rounded-full px-3 py-1 text-sm font-semibold
                    ${
                      item.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : item.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}