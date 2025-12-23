"use client";
import Link from "next/link";
import logo from "./error.jpg";
export default function ErrorPage() {
  return (
    <>
      <div className="flex flex-col justify-center gap-10 items-center my-30">
        <h1 className="animate-bounce text-5xl font-mono font-semibold">
          ERROR 404
        </h1>

        <div>
          <h1 className="font-mono font-bold text-xl text-purple-500 ">
            Maybe you had more than one beers.
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
          Go back to home
        </Link>
      </div>
    </>
  );
}
