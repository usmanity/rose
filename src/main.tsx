import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./routes/root";
import ProjectPanel from "./components/ProjectPanel.tsx";
import { loader as projectLoader } from "./components/ProjectPanel.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <></> },
      {
        path: "/project/:projectName",
        loader: projectLoader,
        element: <ProjectPanel />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
