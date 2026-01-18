"use client";

import { useLangStore, useThemeStore } from "@/storeZustand/theme";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const { lang, changeLang } = useLangStore();
  const path = usePathname();
  const butDisabled = true;

  return (
    <>
      <nav className="flex justify-center items-center p-10 text-[clamp(0.8rem,1.5vw,2rem)] border-purple-700 border-2 font-semibold font-mono rounded-2xl gap-8">
        <Link
          className={path === "/contact" ? "text-purple-500" : undefined}
          href="/contact"
        >
          Contact
        </Link>
        <Link
          className={path === "/projects" ? "text-purple-500" : undefined}
          href="/projects"
        >
          Projects
        </Link>
        <Link
          className={path === "/about" ? "text-purple-500" : undefined}
          href="/about"
        >
          About
        </Link>
        <div className="gap-3 flex text-[1rem] justify-center items-center ">
          <button
            // disabled={butDisabled}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="bg-amber-50 rounded-md h-7 w-13 font-bold cursor-pointer hover:bg-gray-300 text-black"
          >
            {theme}
          </button>
          <button
            disabled={butDisabled}
            onClick={changeLang}
            className={
              lang === "GR"
                ? "text-blue-600 cursor-no-drop"
                : "text-red-600 cursor-no-drop"
            }
          >
            {lang}
          </button>
        </div>
      </nav>
      <Toaster />
    </>
  );
}
