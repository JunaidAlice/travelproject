import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { About } from "./pages/About.jsx";
import { Tour } from "./pages/Tour.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Apply } from "./pages/Apply.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "tour",
    element: <Tour />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path:"apply",
    element:<Apply/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
