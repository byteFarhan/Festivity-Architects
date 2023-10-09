import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ProductDetailes from "../pages/ProductDetailes/ProductDetailes";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import SentProposal from "../pages/SentProposal/SentProposal";
import About from "../pages/About/About";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: () => fetch("./data/products.json"),
        loader: () => fetch("./data/team.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/detailes/:id",
        element: (
          <PrivetRoute>
            <ProductDetailes />
          </PrivetRoute>
        ),
        loader: () => fetch("./data/products.json"),
      },
      {
        path: "/sent-proposal",
        element: (
          <PrivetRoute>
            <SentProposal />
          </PrivetRoute>
        ),
      },
      {
        path: "/about",
        element: (
          <PrivetRoute>
            <About />
          </PrivetRoute>
        ),
      },
    ],
  },
]);
export default router;
