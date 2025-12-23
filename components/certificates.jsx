"use client";

import { useQuery } from "@tanstack/react-query";

async function fetchCertifications() {
  const response = await fetch("/api/certif");

  return response.json();
}

export default function Certifications() {
  const { data, isPending, error, isError } = useQuery({
    queryKey: ["certifications"],
    queryFn: fetchCertifications,
  });

  if (isPending) {
    return (
      <p className="text-white opacity-40 animate-pulse">
        Loading certificates...
      </p>
    );
  }
  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10  text-left">
        {data?.map((d) => (
          <li key={d.title} className="border-purple-600 p-2 border-y ">
            <h1 className="text-[1.4rem]">{d.title}</h1>
            <div className="flex justify-between items-center">
              <p className="opacity-40 text-[0.8rem] italic">{d.instructor}</p>
              <p>{d.from}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
