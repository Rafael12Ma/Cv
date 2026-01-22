"use client";

import { RxLinkedinLogo } from "react-icons/rx";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { useThemeStore } from "@/storeZustand/theme";

export default function ContactPage() {
  const { themeZ } = useThemeStore();

  return (
    <>
      <div className="border-purple-950 border-2 m-10 pb-10 rounded-b-2xl ">
        <div className="bg-purple-600 lg:w-150  md:w-120 sm:w-80 flex flex-col justify-center items-center my-10 rounded-t-2xl mx-auto text-center p-10">
          <h1
            className={`font-mono sm:text-sm md:text-md lg:text-lg xl:text-xl font-semibold}`}
          >
            Contact me
          </h1>
          <p className="opacity-70">via</p>
        </div>
        <div className="bg-purple-500 rounded-b-2xl lg:w-150 md:w-120 sm:w-80 flex flex-col mx-auto justify-center">
          <div className=" flex justify-evenly p-3 text-3xl ">
            <Link
              className="transition-transform duration-200 hover:scale-150"
              href="https://www.linkedin.com/in/rafail-maroufidis-79a905298/"
            >
              {" "}
              <RxLinkedinLogo color={themeZ} />
            </Link>
            <Link
              className="transition-transform duration-200 hover:scale-150"
              href="https://www.facebook.com/profile.php?id=100026189599848"
            >
              <FaFacebookSquare color={themeZ} />
            </Link>
            <Link
              className="transition-transform duration-200 hover:scale-150"
              href="https://github.com/Rafael12Ma"
            >
              <FaGithub color={themeZ} />
            </Link>

            <Link
              className="transition-transform duration-200 hover:scale-150"
              href="mailto:rafaelmaroufidis@yahoo.com"
            >
              <MdEmail color={themeZ} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
