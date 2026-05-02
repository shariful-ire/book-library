"use client";

import Link from "next/link";
import { useAuth } from "@/providers/AuthProvider";

export default function Navbar() {
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="navbar bg-base-100 shadow px-4">

      {/* Left */}
      <div className="flex-1">
        <Link href="/" className="text-xl font-bold">
          📚 Book Library
        </Link>
      </div>

      {/* Center */}
      <div className="hidden md:flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/books">All Books</Link>
        <Link href="/profile">My Profile</Link>
      </div>

      {/* Right */}
      <div>
        {user ? (
          <div className="flex items-center gap-3">
            <span>{user.name}</span>
            <button
              onClick={handleLogout}
              className="btn btn-sm btn-error"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link href="/login" className="btn btn-sm btn-primary">
            Login
          </Link>
        )}
      </div>

    </div>
  );
}