import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <nav
        className="flex justify-center p-10 
        xs:text-[0.3rem] 
        sm:text-[0.5rem]
        md-text[0.8rem]
        lg:text-[1.15rem]
        xl:text-[1.5rem]
        2xl:text-[1.8rem]
        3xl:text-[2.rem]
      border-purple-700 border-2 
        font-semibold font-mono rounded-2xl gap-8"
      >
        <Link href="/contact">Contact</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <div className="gap-5 flex text-[1rem] justify-center items-center ">
          <button className="bg-amber-50 rounded-md h-7 w-10 font-bold cursor-pointer text-black">
            Dark
          </button>
          <button className="text-red-600 cursor-pointer">EN</button>
        </div>
      </nav>
    </>
  );
}
