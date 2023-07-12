import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import projectsData from "../../content/projects.json";
import { useNavigate } from "react-router-dom";
import { AppPrefix } from "../main";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <NavigationMenu.Root className="relative z-[1] flex w-screen justify-center my-8">
      <NavigationMenu.List
        className="center shadow-blackA7 m-0 flex list-none rounded-[6px] bg-white p-1 shadow-[0_2px_10px]
      dark:bg-black dark:text-gray-200 dark:border dark:border-gray-800"
      >
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="text-violet11 hover:bg-violet3 dark:hover:bg-gray-700 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px] dark:text-gray-200"
            href={`/${AppPrefix as string}/`}
          >
            About
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px] dark:text-gray-200 dark:hover:bg-gray-700">
            Projects{" "}
            <CaretDownIcon
              className="text-violet10 relative top-[1px] 
              transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180
              dark:text-gray-200"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto dark:bg-black dark:text-black">
            <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
              {projectsData.map((project) => {
                return (
                  // @ts-ignore
                  <ListItem
                    key={project.name}
                    title={project.name}
                    onClick={() => {
                      navigate(
                        `/${AppPrefix as string}/project/${project.name}`
                      );
                    }}
                  >
                    {project.description}
                  </ListItem>
                );
              })}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white dark:bg-black" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};

const ListItem = React.forwardRef(
  // @ts-ignore-next-line
  ({ children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className="cursor-pointer focus:shadow-[0_0_0_2px] focus:shadow-violet7 dark:focus:shadow-gray-500 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none 
          transition-colors dark:hover:bg-gray-700 dark:text-gray-200"
          {...props}
          // @ts-ignore-next-line
          ref={forwardedRef}
        >
          <div className="text-violet12 dark:text-gray-300 mb-[5px] font-medium leading-[1.2]">
            {title}
          </div>
          <p className="text-mauve11 dark:text-gray-400 leading-[1.4]">
            {children}
          </p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

export default Navbar;
