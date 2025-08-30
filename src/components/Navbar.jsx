import Link from "next/link";
import AuthButtons from "./AuthButtons";

export default function Navbar() {
  return (
    <nav className="w-full bg-background border-b border-border px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-hero rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
          </div>
          <span className="text-2xl font-bold text-foreground">
            Pivot Point
          </span>
        </div>

        {/* Navigation Buttons */}
        <AuthButtons />
      </div>
    </nav>
  );
}
