// import { certifications, languages } from "@/certifications";
import AddLang from "@/components/addLanguage";
import Certifications from "@/components/certificates";
import Languages from "@/components/langs";
import logo from "@/public/images/st.png";
import Image from "next/image";

export default function HomePage() {
  // const cert = certifications;
  // const lang = languages;

  return (
    <>
      <main className="flex flex-col items-center gap-10 my-20">
        <div className="md:flex gap-20">
          <div className="bg-purple-800 rounded-t-3xl p-10 gap-5 justify-center m-auto  flex flex-col items-center h-1vhw">
            <h1 className="font-serif">Rafael Maroufidis</h1>
            <Image width={100} src={logo} alt="A photo of me!" />
            <p className="text-green-500 font-semibold">Open to work </p>
          </div>
          <div className="border w-100 text-xl p-10">
            <h1 className="text-purple-600 font-semibold">About me</h1>
            <p className="font-serif text-lg">
              I am a 23-year-old Computer Science graduate from Democritus
              University of Thrace, based in Kavala, Greece. I have a strong
              interest in software development and enjoy coding in my free time.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-5 gap-20">
          <h1 className="text-purple-600 font-semibold text-2xl">
            Certifications
          </h1>
          <Certifications />

          <h1 className="text-purple-700 font-semibold text-2xl">Languages</h1>
          <Languages />
        </div>
        <AddLang />
      </main>
    </>
  );
}
