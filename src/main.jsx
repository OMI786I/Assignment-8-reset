import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./components/Root";
import Home from "./components/Home";
import PagesToRead from "./components/PagesToRead";
import ListedBooks from "./components/ListedBooks";
import Details from "./components/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/data/:id",
        element: <Details></Details>,
        loader: () => fetch(`data.json`),
      },

      {
        path: "/pagesToRead",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
