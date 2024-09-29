import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/index.jsx";
import Dashboard from "./pages/home/dashboard/index.jsx";
import PersonalInfo from "./pages/home/PersonalInfo/index.jsx";
import SignIn from "./pages/sign-in/index.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import LandingPage from "./pages/LandingPage/index.jsx";
import CreateResume from "./pages/home/CreateResume/index.jsx";
import EditResume from "./pages/home/dashboard/Resume/[resumeId]/Edit.jsx";
const router = createBrowserRouter([
  {
    path: "/auth/sign-in",
    element: <SignIn />,
  },
  { path: "/", element: <LandingPage /> },

  {
    element: <App />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/personal-info", element: <PersonalInfo /> },
      { path: "/create-resume", element: <CreateResume /> },
      { path: "/dashboard/resume/:resumeid/edit", element: <EditResume /> },
    ],
  },
]);
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
