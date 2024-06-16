import { Suspense, useMemo } from "react";
import { Route, Routes } from "react-router";

import LoadingPage from "../../shared/ui/LoadingPage";
import ScrollToHashElement from "../module/providers/ScrollToHashElement.tsx";

import { routes } from "./config";

import { useAuthContext } from "@/app/module/hooks/useAuthContext.ts";
import useInterceptors from "@/app/module/hooks/useInterceptors.ts";

const AppRouter = () => {
  useInterceptors();
  const { isAuth } = useAuthContext();

  const privateRoutes = useMemo(
    () =>
      Object.values(routes).filter((route) =>
        isAuth ? route.isAdmin || !route.isAdmin : !route.isAdmin,
      ),
    [isAuth],
  );

  return (
    <>
      <ScrollToHashElement />
      <Routes>
        {Object.values(privateRoutes).map((el) => (
          <Route
            key={el.path}
            path={el.path}
            element={
              <Suspense fallback={<LoadingPage />}>{el.element}</Suspense>
            }
          />
        ))}
      </Routes>
    </>
  );
};

export default AppRouter;
