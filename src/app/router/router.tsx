import { Suspense } from "react";
import { Route, Routes } from "react-router";

import LoadingPage from "../../shared/ui/LoadingPage";

import { routes } from "./config";
import ScrollToHashElement from "./ScrollToHashElement";

const AppRouter = () => (
  <>
    <ScrollToHashElement />
    <Routes>
      {Object.values(routes).map((el) => (
        <Route
          key={el.path}
          path={el.path}
          element={<Suspense fallback={<LoadingPage />}>{el.element}</Suspense>}
        />
      ))}
    </Routes>
  </>
);

export default AppRouter;
