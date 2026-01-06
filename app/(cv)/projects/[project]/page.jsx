import Link from "next/link";
import { projects } from "../projects";

export default async function DetailPage({ params }) {
  const { project } = await params;
  const p = projects;

  const decodedSlug = decodeURIComponent(project);
  const selectedProject = p.find((p) => p.title === decodedSlug);

  console.log("Your in : ", selectedProject.link);
  return (
    <>
      <h1 className=" text-center m-30 animate-pulse">
        Currently working on it...
      </h1>
      <div className="flex gap-2 flex-col">
        <h1 className="text-center font-mono text-xl font-semibold">
          {selectedProject.title}
        </h1>
        <hr className="mx-auto w-200 opacity-30 text-purple-400" />
        <div className="flex max-md:mx-20 mx-10 xl:mx-40 2xl:mx-60  my-10 gap-10 max-md:flex-col">
          <Link
            className="flex flex-col justify-center items-center gap-6"
            href={`${selectedProject.link}`}
          >
            <img
              className="rounded-e-2xl"
              src={selectedProject.image}
              alt={selectedProject.title}
            />
            <button
              className="
               bg-purple-600
                p-1
                rounded-e-xl
                cursor-pointer
                transform
                active:translate-x-250
                transition-transform
                duration-500
              "
            >
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
          </div>
        </div>
      </div>
    </>
  );
}
