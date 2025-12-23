import Navigation from "@/components/Navigation/Navigation";
import { FaRegCopyright } from "react-icons/fa";

export default function LayoutPageCV({ children }) {
  return (
    <>
      <Navigation />
      {children}

      <div className="mt-50 mb-10 flex justify-center text-sm items-center opacity-40">
        <FaRegCopyright />
        <p>Rafael Maroufidis</p>
      </div>
    </>
  );
}
