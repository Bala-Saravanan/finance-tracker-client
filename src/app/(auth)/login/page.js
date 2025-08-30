export default function page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-orange-200">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6 border border-gray-200"
      >
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-4 tracking-tight">
          Create your account
        </h1>

        {/* Google Signup Button */}
        <button
          type="button"
          onClick={handleGoogleSignUp}
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
