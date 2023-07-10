type ProjectDataType = {
  name: string;
  role: string;
  cover: string;
};

export function ProjectCard({ data }: { data: ProjectDataType }) {
  return (
    <div className="mt-4 dark:bg-gray-900 dark:text-white overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 pt-5">
        <img src={`/public/images/${data.cover}`} />
      </div>
      <div className="px-4 py-2">{data.name}</div>
      <div className="px-4 pt-1 pb-3">{data.role}</div>
    </div>
  );
}
