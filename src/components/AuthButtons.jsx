"use client";

import { useAuth } from "@/context/auth";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";

export default function AuthButtons() {
  const auth = useAuth();
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    }
    if (openDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  return (
    <div className="relative">
      {!auth?.currentUser && (
        <div className="flex items-center space-x-4">
          <button className="px-3 py-2 rounded-lg hover:bg-primary-light font-semibold cursor-pointer text-foreground hover:text-primary transition-colors">
            <Link href={"/login"}>Login</Link>
          </button>
          <button className="px-3 py-2 rounded-lg font-semibold cursor-pointer bg-hero text-primary-foreground shadow-elegant hover:shadow-glow transition-all duration-300 ease-smooth">
            <Link href={"/signup"}>Sign Up</Link>
          </button>
        </div>
      )}
      {auth?.currentUser && (
        <div>
          <ul className="flex items-center space-x-8">
            <li>
              <Link
                href={"/dashboard"}
                className="hover:text-accent-foreground transition-colors"
              >
                Dashboard
              </Link>
            </li>
            <li
              className="flex items-center gap-3 relative cursor-pointer select-none"
              ref={dropdownRef}
            >
              <div>
                <Image
                  src={auth?.currentUser?.photoURL}
                  alt={`${auth?.currentUser?.displayName} avatar`}
                  width={40}
                  height={40}
                  className="rounded-full border border-border"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-xs text-muted-foreground">Welcome!</p>
                <p className="font-semibold">
                  {auth?.currentUser?.displayName}
                </p>
              </div>
              <IoChevronDown
                size={16}
                className={`transition-transform duration-300 ease-smooth ${
                  openDropdown ? "rotate-180" : ""
                }`}
                onClick={() => setOpenDropdown((prev) => !prev)}
              />

              {/* Dropdown */}
              <div
                className={`absolute right-0 top-12 min-w-[200px] z-50 bg-card border border-border rounded-xl shadow-elegant overflow-hidden transition-all duration-300 ease-smooth
                  ${
                    openDropdown
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }
                `}
              >
                <ul className="py-2">
                  <li className="px-5 py-2 text-sm text-muted-foreground border-b border-border">
                    {auth?.currentUser?.email}
                  </li>
                  <li>
                    <Link
                      href="/profile"
                      className="block px-5 py-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      className="w-full text-left px-5 py-2 hover:bg-destructive hover:text-destructive-foreground transition-colors"
                      onClick={() => auth?.logout()}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
