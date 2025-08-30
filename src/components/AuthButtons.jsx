"use client";

import { useAuth } from "@/context/auth";
import Link from "next/link";

export default function AuthButtons() {
  const auth = useAuth();
  console.log(auth?.currentUser);
  return (
    <div>
      {!auth?.currentUser && (
        <div className="flex items-center space-x-4">
          <button className="px-3 py-2 rounded-lg hover:bg-primary-light font-semibold cursor-pointer text-foreground hover:text-primary">
            <Link href={"/login"}>Login</Link>
          </button>
          <button className="px-3 py-2 rounded-lg font-semibold cursor-pointer bg-hero text-primary-foreground shadow-elegant hover:shadow-glow transition-all duration-300 ease-smooth">
            <Link href={"/signup"}>Sign Up</Link>
          </button>
        </div>
      )}
      {auth?.currentUser && (
        <div className="flex items-center space-x-4">
          <div className="">{auth?.currentUser?.email}</div>
          <div onClick={() => auth.logout()}>Log Out</div>
        </div>
      )}
    </div>
  );
}
