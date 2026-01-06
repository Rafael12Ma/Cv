import Link from "next/link";
import { projects } from "./projects";

export default function ProjectsPage() {
  const proj = projects;
  return (
    <>
      <div className="flex flex-col items-center">
        {/* <main className="flex flex-col justify-center items-center my-20 opacity-60">
        <h1 className="animate-pulse">Currently working on this...</h1>
      </main> */}

        <h1 className="text-center my-10 mb-20  text-purple-600 font-serif text-xl">
          My deployed projects{" "}
          <span className="text-white">({proj.length})</span>
          <hr className="mx-40 text-purple-400 opacity-30" />
        </h1>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 m-3 place-items-center">
          {proj.map((project) => (
            <li className="" key={project.title}>
              <Link href={`/projects/${project.title}`}>
                <div className="border-b-2 border-r-2 border-purple-400 font-mono p-20 rounded-2xl">
                  {project.title}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
