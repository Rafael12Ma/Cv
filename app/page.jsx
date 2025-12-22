import TypedReact from "@/components/react-typed";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black">
      <div className="w-full gap-10 h-screen  flex flex-col justify-center items-center">
        <div className="min-h-12 text-3xl font-mono">
          <TypedReact />
        </div>
        <Link href="/about">
          <button className="bg-purple-700 hover:bg-purple-600 p-3 rounded-2xl text-xl text-white cursor-pointer animate-pulse active:animate-ping ">
            Get started
          </button>
        </Link>
        version 22/12...21:43
      </div>
    </main>
  );
}
