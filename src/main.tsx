import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Main } from "./Pages/Main";
import { Cart } from "./Pages/Cart";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "/",
                    element: <Main />,
                },
                {
                    path: "/card",
                    element: <Cart />,
                },
            ],
        },
    ],
    {
        basename: "/skypro-test/",
    },
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
