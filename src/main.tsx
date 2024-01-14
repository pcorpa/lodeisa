import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { Home, Contact, About, Location, AreaInfo } from "./routes";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/location",
    element: <Location />,
  },
  {
    path: "/areainfo",
    element: <AreaInfo />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
