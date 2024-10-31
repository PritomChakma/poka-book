import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Home from "./Components/Home/Home";
import Root from "./Components/Root/Root";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
