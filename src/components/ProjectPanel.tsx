import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useLoaderData, redirect, useNavigate } from "react-router-dom";
import projectsData from "../../content/projects.json";

export function loader({ params }) {
  return params.projectName;
}

export default function ProjectPanel() {
  const navigate = useNavigate();
  const projectName = useLoaderData();
  const [open, setOpen] = useState(true);

  const project = projectsData.find((project) => {
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
        navigate("/");
      }}
    >
      <Dialog as="div" className="relative z-10" onClose={close}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute z-1 w-screen h-screen backdrop-blur-sm"></div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                appear={true}
                as={Fragment}
                enter="transform transition-all ease-in-out duration-700"
                enterFrom="translate-x-full opacity-0"
                enterTo="translate-x-0 opacity-100"
                leave="transform transition-all ease-in-out duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                          {projectName}
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                            onClick={close}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="text-gray-800 relative mt-6 flex-1 px-4 sm:px-6">
                      {project.description}
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
