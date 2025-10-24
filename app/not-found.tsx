// app/not-found.tsx
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-50 px-6">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        Page Not Found
      </h2>
      <p className="mt-2 text-gray-600 max-w-md">
        Oops! The page you are looking for doesn’t exist or may have been moved.
      </p>

      <div className="mt-6">
        <Link href="/">
          <Button className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white shadow-md hover:scale-105 transition-transform">
            Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
