"use client";

import Navigation from "@/components/Navigation/Navigation";
import { useTheme } from "next-themes";
import { FaRegCopyright } from "react-icons/fa";

export default function LayoutPageCV({ children }) {
  const { theme } = useTheme();

  return (
    <>
      <Navigation />
      {children}

      <div
        className={`mt-50 mb-10 flex justify-center ${theme === "light" && "text-black"} text-sm items-center opacity-40`}
      >
        <FaRegCopyright />
        <p>Rafael Maroufidis</p>
      </div>
    </>
  );
}
