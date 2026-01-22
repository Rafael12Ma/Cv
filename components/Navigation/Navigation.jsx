"use client";

import { useLangStore, useThemeStore } from "@/storeZustand/theme";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const { themeZ, changeTheme } = useThemeStore();
  const path = usePathname();
  const butDisabled = true;
  console.log("themez=", themeZ);
  console.log("theme=", theme);

  return (
    <>
      <nav
        className={`flex justify-center ${theme === "light" && "text-black"} items-center p-10 text-[clamp(0.8rem,1.5vw,2rem)] border-purple-700 border-2 font-semibold font-mono rounded-2xl gap-8`}
      >
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
          {/* {theme === "dark" && ( */}
          <button
            // disabled={butDisabled}
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
              changeTheme(themeZ);
            }}
            className={`rounded-md p-1 text-3xl font-bold cursor-pointer hover:opacity-65 active:scale-125 transition duration-100 ${themeZ === "light" && "text-black"}`}
          >
            {theme === "dark" ? <MdDarkMode /> : <MdLightMode />}
          </button>
          {/* )} */}
          {/* <button
            disabled={butDisabled}
            onClick={changeLang}
            className={
              lang === "GR"
                ? "text-blue-600 cursor-no-drop"
                : "text-red-600 cursor-no-drop"
            }
          >
            {lang}
          </button> */}
        </div>
      </nav>
      <Toaster />
    </>
  );
}
