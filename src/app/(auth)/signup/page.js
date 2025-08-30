"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ROOT_URL } from "@/constants/constant.js";
// import { signUpWithEmail, signUpWithGoogle } from "@/services/authService";
import ContinueWithGoogleButton from "@/components/continue-with-google-button";

export default function SignUp() {
  const router = useRouter();

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { id, value } = event.target;
    setCredentials((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const { email, password } = credentials;
    if (!email || !password) return "Email and password are required";
    if (password.length < 6) return "Password must be at least 6 characters";
    return null;
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setError("");
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      const token = await signUpWithEmail(
        credentials.email,
        credentials.password
      );
      console.log(token);
      await axios.post(
        `${ROOT_URL}/auth/signup`,
        { token },
        { headers: { "Content-Type": "application/json" } }
      );
      router.push("/dashboard"); // redirect after signup
    } catch (err) {
      setError(err.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // const handleGoogleSignUp = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //   setLoading(true);
  //   try {
  //     const token = await signUpWithGoogle();
  //     await axios.post(
  //       `${ROOT_URL}/auth/signup`,
  //       { token },
  //       { headers: { "Content-Type": "application/json" } }
  //     );
  //     router.push("/dashboard");
  //   } catch (err) {
  //     setError(err.message || "Google signup failed. Try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-orange-200">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6 border border-gray-200"
      >
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-4 tracking-tight">
          Create your account
        </h1>

        <ContinueWithGoogleButton loading={loading} />

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-4 text-gray-400 font-medium">or</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        {/* Email & Password Fields */}
        <div className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              id="email"
              onChange={handleChange}
              autoFocus
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 mt-2 text-lg rounded-lg font-semibold shadow-md transition text-white ${
            loading
              ? "bg-orange-400 opacity-70 cursor-not-allowed"
              : "bg-orange-600 hover:bg-orange-700"
          }`}
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>

        <p className="text-center text-gray-500 text-sm mt-2">
          Already have an account?{" "}
          <a href="/login" className="text-orange-600 hover:underline">
            Log in
          </a>
        </p>
      </form>
    </div>
  );
}
