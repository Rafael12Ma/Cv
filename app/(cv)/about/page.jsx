import logo from "@/public/images/st.png";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <main className="flex flex-col items-center gap-10 my-20">
        <div className="bg-purple-800 rounded-t-3xl p-10 gap-5 justify-center m-auto  flex flex-col items-center h-1vhw">
          <h1 className="font-sans">Rafael Maroufidis</h1>
          <Image width={100} src={logo} alt="A photo of me!" />
        </div>
        <div className="border w-150 text-xl p-10">
          <h1 className="text-purple-700 font-semibold">About me</h1>
          <p className="font-serif text-lg">
            Name is Rafael. I'm from Greece and I live in Kavala. I'm 23 years
            old and i study Computer Science in Democritus University of Thrace
            (DUTH). In my spare time I usually go fishing or coding.
          </p>
        </div>
      </main>
    </>
  );
}
