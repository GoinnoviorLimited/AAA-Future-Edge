import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";

/* Domain Redirect */
if (window.location.hostname === "www.aaa-fe.com") {
  const redirectUrl =
    "https://aaa-fe.com" +
    window.location.pathname +
    window.location.search +
    window.location.hash;

  window.location.replace(redirectUrl);
}

/* Init Libraries */
AOS.init();

/* Render App */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster />
    <RouterProvider router={router} />
  </StrictMode>
);