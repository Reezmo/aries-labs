"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function PageClient() {
  const router = useRouter();

  useEffect(() => {
    // Dashboard removed — send users back to landing page
    router.replace("/");
  }, [router]);

  return null;
}
