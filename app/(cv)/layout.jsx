import Navigation from "@/components/Navigation/Navigation";

export default function LayoutPageCV({ children }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}
