//@ts-nocheck
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useLoaderData, useNavigate } from "react-router-dom";
import projectsData from "../../content/projects.json";
import { ProjectType } from "../types/Project";
import { AppPrefix } from "../main";

export function loader({ params }: LoaderFunctionArgs): string | undefined {
  return params?.projectName as string;
}

export default function ProjectPanel() {
  const navigate = useNavigate();
  const projectName = useLoaderData();
  const [open, setOpen] = useState(true);

  const project: ProjectType | undefined = projectsData.find((project) => {
    return project.name === projectName;
  });

  const close = () => {
    setOpen(false);
  };
  return (
    <Transition.Root
      appear={true}
      show={open}
      as={Fragment}
      afterLeave={() => {
        navigate(`/${AppPrefix as string}/`);
      }}
    >
      <Dialog as="div" className="relative z-10" onClose={close}>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-0 flex max-w-full">
              <Transition.Child
                appear={true}
                as={Fragment}
                enter="transform transition-all ease-in-out duration-700"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transform transition-all ease-in-out duration-700"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Panel className="pointer-events-auto w-full">
                  <div className="flex h-full flex-col overflow-y-auto bg-white dark:bg-gray-600 dark:text-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                          {projectName as string}
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none "
                            onClick={close}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="text-gray-800 dark:text-white relative mt-6 flex-1 px-4 sm:px-6">
                      {project?.description as string}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
