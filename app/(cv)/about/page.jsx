import { certifications } from "@/certifications";
import logo from "@/public/images/st.png";
import Image from "next/image";

export default function HomePage() {
  const cert = certifications;
  return (
    <>
      <main className="flex flex-col items-center gap-10 my-20">
        <div className="bg-purple-800 rounded-t-3xl p-10 gap-5 justify-center m-auto  flex flex-col items-center h-1vhw">
          <h1 className="font-sans">Rafael Maroufidis</h1>
          <Image width={100} src={logo} alt="A photo of me!" />
        </div>
        <div className="border w-100 text-xl p-10">
          <h1 className="text-purple-700 font-semibold">About me</h1>
          <p className="font-serif text-lg">
            Name is Rafael. I'm from Greece and I live in Kavala. I'm 23 years
            old and i study Computer Science in Democritus University of Thrace
            (DUTH). In my spare time I usually go fishing or coding.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center p-5 gap-10">
          <h1 className="text-purple-700 font-semibold text-2xl">
            Certifications
          </h1>
          <ul className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-10  text-left">
            {cert.map((certif) => (
              <li
                key={certif.title}
                className="border-purple-600 p-2 border-y "
              >
                <h1 className="text-[1.4rem]">{certif.title}</h1>
                <div className="flex justify-between items-center">
                  <p className="opacity-40 text-[0.8rem]">
                    {certif.instructor}
                  </p>
                  <p>{certif.from}</p>
                </div>
              </li>
            ))}
          </ul>
          <hr />
        </div>
      </main>
    </>
  );
}
