import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <nav
        className="flex justify-center p-10 xl:text-xl md:text-md sm:text-sm  border-purple-700 border-2 text-xl 
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
