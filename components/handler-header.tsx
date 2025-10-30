'use client';

import { useTheme } from "next-themes";
import { Logo } from "./logo";

export default function HandlerHeader() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <header className="fixed w-full z-50 p-4 h-14 flex items-center py-4 border-b justify-between bg-background">
        <Logo link={"/"} />

        <div className="flex items-center justify-end gap-5">
          <button
            aria-label="Toggle color mode"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md bg-muted/10"
          >
            Toggle Theme
          </button>
        </div>
      </header>
      <div className="min-h-14" /> {/* Placeholder for fixed header */}
    </>
  );
}