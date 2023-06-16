"use client";
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  async function sendMagic(email: string) {
    let { data, error } = await supabase.auth.signInWithOtp({
      email: email,
    });

    if (error) return error;
    if (data) {
      console.log(data);
      setEmail("");
      return router.push("/landing");
    }
  }
  return (
    <div className="space-y-4 h-screen border items-center flex-col flex justify-center py-6 bg-gradient-to-l from-red-900 to-orange-400">
      <div className="w-[75%] space-y-4">
        Email Address
        <input
          className="p-4 rounded-2xl shadow-md shadow-yellow-500 w-[100%] border"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <button
          type="button"
          onClick={() => sendMagic(email)}
          className="py-4 px-14 rounded-full hover:animate-pulse bg-gradient-to-l from-yellow-600 to-green-700 shadow-lg shadow-amber-400 text-white font-bold"
        >
          Enter the Application
        </button>
      </div>
    </div>
  );
}
