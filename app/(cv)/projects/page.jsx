"use client";

import Projects, { fetchProjects } from "@/components/projectsPage/projects";
import { useQuery } from "@tanstack/react-query";

export default function ProjectsPage() {
  const { data } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });
  return (
    <>
      <div className="flex flex-col items-center">
        {/* <main className="flex flex-col justify-center items-center my-20 opacity-60">
        <h1 className="animate-pulse">Currently working on this...</h1>
      </main> */}

        <h1 className="text-center my-10 mb-20  text-purple-600 font-serif text-xl">
          My deployed projects{" "}
          <span className="text-white">({data?.length})</span>
          <hr className="mx-40 text-purple-400 opacity-30" />
        </h1>
        <Projects />
      </div>
    </>
  );
}
