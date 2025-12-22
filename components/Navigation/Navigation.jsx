import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <nav>
        <Link href="/contact">Contact</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About me</Link>
      </nav>
    </>
  );
}
