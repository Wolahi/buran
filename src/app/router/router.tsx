import { Suspense } from "react";
import { Route, RouteProps, Routes } from "react-router";

import LoadingPage from "../../shared/LoadingPage";

import { routes } from "./config";

const AppRouter = () => {
  const withRouter = (route: RouteProps) => {
    const element = (
      <Suspense fallback={<LoadingPage />}>{route.element}</Suspense>
    );
    return (
      <Route
        key={route.path}
        path={route.path}
        element={element}
      />
    );
  };

  return <Routes>{Object.values(routes).map(withRouter)}</Routes>;
};

export default AppRouter;
