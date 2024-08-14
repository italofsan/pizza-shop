import { RouterProvider } from "react-router-dom";

import { router } from "./routes.tsx";

import "./global.css";

export function App() {
  return <RouterProvider router={router} />;
}
