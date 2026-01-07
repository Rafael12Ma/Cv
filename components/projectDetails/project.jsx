"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "@/components/projectsPage/projects";
import Link from "next/link";



export default function Project({ project }) {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  const decodedSlug = decodeURIComponent(project);
  const selectedProject = data?.find((p) => p.title === decodedSlug);

  if (isPending) {
    return (
      <div className="flex my-40 items-center justify-center">
        <p className="text-purple-400 opacity-40 animate-pulse">
          Loading project...
        </p>
      </div>
    );
  }

  if (isError) {
    return <p>An error occured while fetching the data...</p>;
  }
  return (
    <>
      {/* <h1 className=" text-center m-30 animate-pulse">
        Currently working on it...
      </h1> */}
      <div className="flex gap-2 flex-col ">
        <div className="flex max-md:mx-20 mx-10 xl:mx-40 2xl:mx-60 my-10 gap-10 max-md:flex-col">
          <Link
            className="flex flex-col justify-center items-center gap-6"
            href={`${selectedProject.link}`}
          >
            <img
              className="rounded-e-2xl"
              src={selectedProject.image}
              alt={selectedProject.title}
            />
            <button className="bg-purple-600 p-1 rounded-e-xl cursor-pointer transform active:translate-x-250 transition-transform duration-500">
              Open app
            </button>
          </Link>
          <div className="flex flex-col">
            <label className="text-center text-purple-500 font-semibold underline my-2">
              Description
            </label>
            <h1 className="text-purple-200 text-left">
              {selectedProject.description}
            </h1>
          </div>
          <div className="flex flex-col">
            <label className="text-center text-purple-500 font-semibold underline my-2">
              Technologies
            </label>
            <ul className="grid max-md:grid-cols-2 max-md:place-items-center">
              {selectedProject.techs.map((tech) => (
                <li className="text-purple-200" key={tech}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
