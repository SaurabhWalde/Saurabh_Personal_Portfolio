import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";
import ErrorPage from "../pages/ErrorPage";
import NotFound from "../pages/NotFound";

const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));

// For local dev, we remove basename
export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <Suspense fallback={<Loading />}>
          <Main />
        </Suspense>
      ),
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },  // Home page
        { path: "home", element: <Home /> }, // optional /home route
        { path: "*", element: <NotFound /> }, // catch-all 404
      ],
    },
  ],
  { basename: undefined } // ensure no basename for local dev
);
