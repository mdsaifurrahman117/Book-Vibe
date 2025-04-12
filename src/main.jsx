import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css"
import App from "./App"
import React from "react";
import ReactDOM from "react-dom/client";

const router = createBrowserRouter([
            {
                        path: "/",
                        element: <App/>,
            },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
            <RouterProvider router={router} />
);
