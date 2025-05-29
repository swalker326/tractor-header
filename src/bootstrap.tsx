import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";

// Only run this when the header is running standalone (not as a remote module)
const rootElement = document.getElementById("root");
if (rootElement) {
  const router = createBrowserRouter([{ path: "/", element: <App /> }]);
  
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
