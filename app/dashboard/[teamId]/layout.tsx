'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Layout() {
  const router = useRouter();

  useEffect(() => {
    // Team dashboard has been removed — redirect to landing page
    router.replace("/");
  }, [router]);

  return null;
}