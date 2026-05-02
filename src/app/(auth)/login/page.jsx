"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/providers/AuthProvider";

export default function LoginPage() {
  const { setUser } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    // Fake login (for now)
    const fakeUser = {
      name: "Shariful",
      email,
    };

    setUser(fakeUser);

    // redirect to home
    router.push("/");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-base-200 rounded-xl">

      <h2 className="text-2xl font-bold mb-4 text-center">
        Login
      </h2>

      <form onSubmit={handleLogin} className="space-y-4">

        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <button className="btn btn-primary w-full">
          Login
        </button>

      </form>

      <p className="text-sm mt-4 text-center">
        Don’t have an account?{" "}
        <Link href="/register" className="text-blue-500">
          Register
        </Link>
      </p>

    </div>
  );
}