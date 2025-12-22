"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <>
      <nav className="flex justify-center p-10 text-[clamp(0.3rem,1.5vw,2rem)] border-purple-700 border-2 font-semibold font-mono rounded-2xl gap-8">
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
          <button className="bg-amber-50 rounded-md h-7 w-10 font-bold cursor-pointer text-black">
            Dark
          </button>
          <button className="text-red-600 cursor-pointer">EN</button>
        </div>
      </nav>
    </>
  );
}
