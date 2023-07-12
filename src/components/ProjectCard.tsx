import { Link } from "react-router-dom";
import { AppPrefix } from "../main";

type ProjectDataType = {
  name: string;
  role: string;
  cover: string;
};

export function ProjectCard({ data }: { data: ProjectDataType }) {
  return (
    <Link to={`/${AppPrefix as string}/project/${data.name}`}>
      <div className="mt-4 dark:bg-gray-900 dark:text-white overflow-hidden bg-white shadow hover:shadow-md transition-all duration-300 rounded-sm">
        <div className="px-2 pt-2 aspect-video overflow-hidden">
          <img src={`/${AppPrefix as string}/images/${data.cover}`} />
        </div>
        <div className="text-xl font-semibold px-4 mt-2">{data.name}</div>
        <div className="text-gray-800 dark:text-gray-300 px-4 pt-1 pb-3">
          {data.role}
        </div>
      </div>
    </Link>
  );
}
