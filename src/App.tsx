import { RouterProvider } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";

import { ThemeProvider } from "./components/theme/theme-provider.tsx";

import { router } from "./routes.tsx";

import "./global.css";

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | Pizza Shop" />
        <RouterProvider router={router} />
        <Toaster richColors position="top-center" />
      </ThemeProvider>
    </HelmetProvider>
  );
}
