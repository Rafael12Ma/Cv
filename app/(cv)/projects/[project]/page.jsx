import Project from "@/components/projectDetails/project";

export default async function DetailPage({ params }) {
  const { project } = await params;
  const decodedSlug = decodeURIComponent(project);
  return (
    <>
      <div className="my-20">
        <h1 className="text-center font-mono text-xl font-semibold">
          {decodedSlug}
        </h1>
        <hr className="mx-20 opacity-30 text-purple-400" />

        <Project project={project} />
      </div>
    </>
  );
}
