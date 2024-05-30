import { createBrowserRouter, Navigate } from "react-router-dom";


import Layout from "../layouts/Layout";
import Home from "../pages/Home/Home";
import Signup from "../pages/Auth/Signup/Signup";
import Product from "../pages/Product/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "*",
        element: <Navigate to={"/"} />,
      },
    ],
  },
]);

export default router;
