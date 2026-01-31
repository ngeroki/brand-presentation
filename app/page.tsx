"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the new Showcase Brand Portal
    router.replace("/showcase");
  }, [router]);

  return (
    <main className="w-screen h-screen flex items-center justify-center bg-white">
      <div className="text-zinc-400 animate-pulse">Loading presentation...</div>
    </main>
  );
}
