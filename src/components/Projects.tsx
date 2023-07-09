import { ProjectCard } from "./ProjectCard";
import projectsData from "../../content/projects.json";

export default function Projects() {
  return (
    <div className="project-container grid md:grid-cols-2 sm:gap-4 gap-0 sm:grid-cols-1">
      {projectsData.map((project) => {
        return <ProjectCard data={project} key={project.name} />;
      })}
    </div>
  );
}
