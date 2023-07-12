//@ts-nocheck
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useLoaderData, useNavigate } from "react-router-dom";
import projectsData from "../../content/projects.json";
import { ProjectType } from "../types/Project";
import { AppPrefix } from "../main";
import { Remark } from "react-remark";

export function loader({ params }: LoaderFunctionArgs): string | undefined {
  return params?.projectName as string;
}

export default function ProjectPanel() {
  const [markdownContent, setMarkdownContent] = useState("");
  const navigate = useNavigate();
  const projectName = useLoaderData();
  const [open, setOpen] = useState(true);

  const project: ProjectType | undefined = projectsData.find((project) => {
    return project.name === projectName;
  });

  const details_file = project?.details_file;
  const close = () => {
    setOpen(false);
  };

  useEffect(() => {
    const getStuff = async () => {
      const resp = await fetch(
        `${AppPrefix as string}/projects/${details_file}`
      );
      const data = await resp.text();

      console.log({ data });
      setMarkdownContent(data);
    };
    getStuff().void;
  }, [setMarkdownContent]);

  return (
    <Transition.Root
      appear={true}
      show={open}
      as={Fragment}
      afterLeave={() => {
        navigate(`${AppPrefix as string}/`);
      }}
    >
      <Dialog as="div" className="relative z-10" onClose={close}>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-0 flex max-w-full">
              <Transition.Child
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
                          {/* {projectName as string} */}
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
                    <div className="text-gray-800 dark:text-white relative mt-6 flex-1 px-4 sm:px-6 mx-auto max-w-3xl">
                      <Remark
                        className=""
                        rehypeReactOptions={{
                          components: {
                            h1: ({ children }) => (
                              <h1 className="text-4xl font-bold my-4">
                                {children}
                              </h1>
                            ),
                            h2: ({ children }) => (
                              <h1 className="text-3xl font-bold my-3">
                                {children}
                              </h1>
                            ),
                            h3: ({ children }) => (
                              <h1 className="text-2xl font-bold my-2">
                                {children}
                              </h1>
                            ),
                            p: ({ children }) => (
                              <p className="prose dark:prose-dark text-md leading-tight">
                                {children}
                              </p>
                            ),
                          },
                        }}
                      >{`${markdownContent}`}</Remark>
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
