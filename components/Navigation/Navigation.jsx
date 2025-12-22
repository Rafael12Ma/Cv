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
        font-semibold font-mono rounded-2xl gap-10"
      >
        <Link href="/contact">Contact</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About me</Link>
        <button>EN</button>
        <button>Dark</button>
      </nav>
    </>
  );
}
