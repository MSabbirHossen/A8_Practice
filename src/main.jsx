import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import About from "./pages/About.jsx";
import UserDetails from "./pages/UserDetails.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    // loader: ()=>  fetch("/data.json")
    loader: () => fetch("/data.json")
  },
  {
    path: "about",
    Component: About,
    // element: <About/>,
  },
  {
    path: "details/:id",
    Component: UserDetails,
    loader: ()=>  fetch("/data.json")

    // loader: fetch("/W2-A8/public/data.json")
  },
  {
    path:"app",
    element: <App/>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
