import React from "react";
import ReactDom from "react-dom";
//@ts-ignore
import pkg from "../package.json";

import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <div>
          Hello world! <Link to="/demo">Demo page</Link>
        </div>
      ),
    },

    {
      path: "/demo",
      element: <div>Hello world! This is demo</div>,
    },
  ],
  {
    basename: "/app/react-app-01",
  }
);

const element = document.getElementById(pkg.name) as any;
ReactDom.render(<RouterProvider router={router} />, element);
