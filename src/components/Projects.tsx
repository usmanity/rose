import { ProjectCard } from "./ProjectCard";
import projectsData from "../../content/projects.json";

export default function Projects() {
  return (
    <div className="project-container max-w-3xl mx-4 sm:mx-auto grid md:grid-cols-2 sm:gap-6 gap-0 sm:grid-cols-1">
      {projectsData.map((project) => {
        return <ProjectCard data={project} key={project.name} />;
      })}
    </div>
  );
}
