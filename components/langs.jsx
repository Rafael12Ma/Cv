"use client";

import { useQuery } from "@tanstack/react-query";

async function fetchLanguages() {
  const response = await fetch("/api/langu");

  return response.json();
}

export default function Languages() {
  const { data, isPending, error, isError } = useQuery({
    queryKey: ["languages"],
    queryFn: fetchLanguages,
  });

  if (isPending) {
    return (
      <>
        <p className="text-white opacity-40 animate-pulse">
          Loading languages...
        </p>
      </>
    );
  }

  if (isError) {
    throw new Error("New error occured while fetching data!");
  }
  return (
    <>
      {data?.length > 0 && (
        <ul className="flex flex-col justify-center gap-10">
          {data.map((l) => (
            <li
              className="border-purple-700 border-b-2  justify-between flex  gap-10"
              key={l.title}
            >
              <p className="">{l.title}</p>
              <p>{l.level}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
