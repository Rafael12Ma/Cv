"use client";

import logo from "./error.jpg";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const path = usePathname();
  return (
    <>
      <div className="flex flex-col justify-center gap-10 items-center my-30">
        <div>
          <h1 className="animate-bounce text-5xl font-mono font-semibold text-purple-950">
            ERROR 404
          </h1>
          <p className="text-[0.8rem] text-center">
            Page <span className="text-purple-400 font-semibold">{path}</span>{" "}
            not found
          </p>
        </div>
        <div>
          <h1 className="font-mono font-bold text-xl text-left text-purple-500 ">
            Maybe you have had more than{" "}
            <span className="animate-bounce">one</span> beers.
          </h1>
          <h2 className="opacity-40 font-mono text-[0.5rem]">
            Try radler instead!
          </h2>
        </div>
        <img
          width={700}
          src={logo.src}
          alt="Error 404 Brian Griffin drunk!"
          className="rounded-2xl"
        />
        <Link
          href="/about"
          className="bg-purple-500 font-serif hover:bg-purple-700 hover:animate-pulse  p-2 rounded-2xl"
        >
          Go back to site
        </Link>
      </div>
    </>
  );
}
