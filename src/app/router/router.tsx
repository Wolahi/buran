import { Suspense } from "react";
import { Route, Routes } from "react-router";

import LoadingPage from "../../shared/LoadingPage";

import { routes } from "./config";

const AppRouter = () => (
  <Routes>
    {Object.values(routes).map((el) => (
      <Route
        key={el.path}
        path={el.path}
        element={<Suspense fallback={<LoadingPage />}>{el.element}</Suspense>}
      />
    ))}
  </Routes>
);

export default AppRouter;
