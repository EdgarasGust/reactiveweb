import { projects } from "../../data/projects";
import ProjectDetailsPage from "../../ui/ProjectDetailsPage";

function WelcomePortfolio() {
  return (
    <div className="mx-auto mt-14 px-2 py-6">
      <div className="text-center">
        <h3 className="text-2xl">Completed Projects</h3>
        <p className="pt-4 text-center text-lg">
          Below, you can review some examples of completed projects.
        </p>
      </div>
      <div className="mt-4 flex flex-col justify-center gap-9 sm:flex-row sm:flex-wrap md:mt-12">
        <div className="w-full border-b md:hidden"></div>
        {projects.map((project) => (
          <div key={project.heading} className="flex flex-col">
            <h3 className="font-2xl pb-2 text-center md:hidden">
              {project.companyName}
            </h3>
            <ProjectDetailsPage project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WelcomePortfolio;
