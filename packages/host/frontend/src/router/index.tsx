import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { authRouter } from '../page/auth/auth.router'
import { mainRouter } from '../page/main/main.router'


const router = createBrowserRouter([
  mainRouter,
  authRouter
]);

export const Router = () => <RouterProvider router={router} />