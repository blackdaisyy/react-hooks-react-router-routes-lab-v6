// src/routes.js
import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "directors", element: <Directors /> },
      { path: "actors", element: <Actors /> },
      { path: "movie/:id", element: <Movie /> },
    ],
  },
];

export default routes;
