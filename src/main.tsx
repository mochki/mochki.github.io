import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider, Navigate } from "react-router-dom";
import { pageParam, pageLoader } from "./pages";
import App from "./App.tsx";
import "./index.css";

const router = createHashRouter([
  {
    path: `/:${pageParam}?`,
    element: <App />,
    loader: pageLoader,
    errorElement: <Navigate to="/" replace />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
