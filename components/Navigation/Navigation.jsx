import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <nav
        className="flex justify-center p-10 
        xs:text-[0.6rem] 
        sm:text-[0.8rem]
        md-text[1.1rem]
        lg:text-[1.4rem]
        xl:text-[1.7rem]
        2xl:text-[2rem]
        3xl:text-[2.3rem]
      border-purple-700 border-2 
        font-semibold rounded-2xl gap-10"
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
