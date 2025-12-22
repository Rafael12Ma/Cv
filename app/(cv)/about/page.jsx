import logo from "@/public/images/st.png";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <main className="flex flex-col my-20">
        <div className="bg-purple-800 rounded-t-3xl p-10 gap-5 justify-center m-auto  flex flex-col items-center h-1vhw">
          <h1 className="font-sans">Rafael Maroufidis</h1>
          <Image width={100} src={logo} alt="A photo of me!" />
        </div>
      </main>
    </>
  );
}
