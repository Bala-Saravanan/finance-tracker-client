"use client";

import { useAuth } from "@/context/auth";

export default function ContinueWithGoogleButton({ loading }) {
  const auth = useAuth();
  return (
    <div>
      {/* Google Signup Button */}
      <button
        type="button"
        onClick={auth?.handleGoogleSignIn}
        disabled={loading}
        className={`flex items-center justify-center gap-2 w-full py-3 px-4 bg-white border border-gray-300 rounded-lg shadow-sm transition font-semibold ${
          loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
        }`}
      >
        <svg className="w-5 h-5" viewBox="0 0 48 48">
          <g>
            <path
              fill="#4285F4"
              d="M44.5 20H24v8.5h11.7C34.7 32.9 30.1 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.5 6.2 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.2-4z"
            />
            <path
              fill="#34A853"
              d="M6.3 14.7l7 5.1C15.5 16.2 19.4 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.5 6.2 29.6 4 24 4c-7.2 0-13.3 4.1-16.7 10.7z"
            />
            <path
              fill="#FBBC05"
              d="M24 44c5.6 0 10.5-1.9 14.3-5.2l-6.6-5.4c-2.1 1.4-4.8 2.2-7.7 2.2-6.1 0-11.2-4.1-13-9.6l-7 5.4C6.7 39.9 14.7 44 24 44z"
            />
            <path
              fill="#EA4335"
              d="M44.5 20H24v8.5h11.7c-1.2 3.2-4.2 5.5-7.7 5.5-2.1 0-4-.7-5.5-1.9l-7 5.4C18.8 41.8 21.3 44 24 44c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.2-4z"
            />
          </g>
        </svg>
        <h1 className="text-black">Sign up with Google</h1>
      </button>
    </div>
  );
}
