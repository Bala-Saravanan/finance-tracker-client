"use client";

import { navItems } from "@/constants/constant";
import { useAuth } from "@/context/auth";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  const auth = useAuth();

  return (
    <div>
      <aside className="w-1/5 flex flex-col px-5 py-7 bg-gray-200 border-e border-e-black h-screen">
        <div className="flex flex-col items-center space-y-2 m-2 border-b border-b-black">
          <div>
            <Image
              src={auth?.currentUser?.photoURL}
              alt={`${auth?.currentUser?.displayName} avatar`}
              width={80}
              height={80}
              className="rounded-full border border-border"
            />
          </div>
          <div className="flex flex-col items-center space-y-3">
            <p className="text-3xl font-bold">
              {auth?.currentUser?.displayName}
            </p>
            <button className="px-5 py-1 rounded-lg bg-accent-foreground font-semibold text-white cursor-pointer hover:bg-purple-500">
              Update
            </button>
          </div>
        </div>

        <nav className="mt-16">
          <ul className="flex flex-col items-center space-y-7">
            {navItems.map(({ link, href }, idx) => (
              <li key={idx} className="hover:text-accent-foreground">
                <Link href={href}>{link}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
