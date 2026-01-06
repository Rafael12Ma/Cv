"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export async function fetchProjects() {
  const response = await fetch("/api/projects");

  return response.json();
}

export default function Projects() {
  const { data, isPending, error, isError } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  if (isPending) {
    return (
      <p className="text-white opacity-40 animate-pulse text-center my-40">
        Loading projects...
      </p>
    );
  }

  if (isError) {
    return <p>An error occured while fetching the data...</p>;
  }

  return (
    <>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 m-3 place-items-center">
        {data.map((project) => (
          <li className="" key={project.title}>
            <Link href={`/projects/${project.title}`}>
              <div className="border-b-2 border-r-2 border-purple-400 font-mono p-20 rounded-2xl">
                {project.title}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
