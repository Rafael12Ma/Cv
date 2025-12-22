"use client";

import { ReactTyped } from "react-typed";

export default function TypedReact() {
  return (
    <>
      <ReactTyped
        strings={["Hey there!", "Μy name is Rafael and this is my Portfolio"]}
        typeSpeed={40}
        loop={true}
        backSpeed={30}
        cursorChar=""
        showCursor={true}
      />
    </>
  );
}
