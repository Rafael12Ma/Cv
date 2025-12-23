import { RxLinkedinLogo } from "react-icons/rx";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <div className="border-purple-950 border-2 m-10">
        <div className="bg-purple-500 sm:w-80 flex flex-col justify-center items-center my-10 rounded-t-2xl mx-auto text-center p-10">
          <h1 className="font-mono font-semibold">Contact me</h1>
        </div>
        <div className="bg-blue-400 sm:w-80 flex flex-col mx-auto justify-center">
          <div className=" flex justify-evenly p-3 ">
            <Link href="/a">
              {" "}
              <RxLinkedinLogo />
            </Link>
            <Link href="/a">
              <FaFacebookSquare />
            </Link>
            <Link href="/a">
              <FaGithub />
            </Link>
            <Link href="/a">
              <MdEmail />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
