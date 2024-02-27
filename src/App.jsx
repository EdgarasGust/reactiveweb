import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";

import { DarkModeProvider } from "./context/DarkModeContext";
import { HelmetProvider } from "react-helmet-async";
import Error from "./ui/Error";
import Spinner from "./ui/Spinner";

const AppLayout = lazy(() => import("./layout/AppLayout"));
const Welcome = lazy(() => import("./pages/Welcome"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contacts = lazy(() => import("./pages/Contacts"));

function App() {
  const helmetContext = {};
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Welcome />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "services",
          element: <Services />,
        },
        {
          path: "contacts",
          element: <Contacts />,
        },
      ],
    },
  ]);
  return (
    <>
      <HelmetProvider context={helmetContext}>
        <DarkModeProvider>
          <Suspense fallback={<Spinner />}>
            <RouterProvider router={router} />
            <Toaster
              position="top-center"
              gutter={12}
              containerStyle={{ margin: "8px" }}
              toastOptions={{
                success: {
                  duration: 5000,
                  className: "bg-gray-100 p-4 max-w-lg",
                },
                error: {
                  duration: 5000,
                  className: "bg-red-200 p-4 max-w-lg",
                },
              }}
            />
          </Suspense>
        </DarkModeProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
