"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const path = usePathname();
  return (
    <>
      <main className="w-full gap-3 h-screen flex flex-col justify-center items-center text-2xl">
        <h1>
          There is not such correct web url :{" "}
          <span className="text-purple-500">{path}</span>
        </h1>
        <h2>Try this one </h2>
        <Link className="text-purple-500" href="/about">
          <button className="hover:bg-purple-500 active:animate-spin hover:text-black cursor-pointer p-2 rounded-l-2xl">
            /about
          </button>
        </Link>
      </main>
    </>
  );
}
