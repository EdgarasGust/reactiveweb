import { Link } from "react-router-dom";
import Button from "./Button";

function ProjectDetailsPage({ project }) {
  const { heading, description, image, website, repo, companyName } =
    project;
  return (
    <div className="mx-auto flex max-w-sm flex-col rounded-lg border pb-7 shadow-xl dark:border-indigo-300 sm:w-[382px]">
      <div className="flex h-[250px] ">
        <img
          src={image}
          width="100%"
          height="100%"
          alt={`Image of: ${companyName}`}
          className="rounded-t"
        />
      </div>
      <hr className="dark:hidden" />
      <div className="flex-1 p-3">
        <h2 className="my-2 text-center text-lg font-medium">{heading}</h2>
        <p className="my-auto mb-6 text-justify text-sm">{description}</p>
      </div>
      <div className="flex justify-center gap-2">
        <Link to={website} target="_blank">
          <Button btnType="primary">Live Preview</Button>
        </Link>
        <Link to={repo} target="_blank">
          <Button btnType="secondary">Check on Github</Button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectDetailsPage;
