import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <nav
        className="flex justify-center p-10 
        xs:text-[1.9rem] 
        sm:text-[2.1rem]
        md-text[2.4rem]
        lg:text-[2.8rem]
        xl:text-[3.2rem]
        2xl:text-[3.6rem]
        3xl:text-[4rem]
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
