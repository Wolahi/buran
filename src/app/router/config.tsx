import { RouteProps } from "react-router";

import {
  AdminPage,
  CommandsPage,
  IndexPage,
  MainPage,
  NotFoundPage,
} from "../../pages";

export enum ERoute {
  Index = "/index",
  Main = "/",
  AdminPage = "/admin",
  CommandsPage = "/commands",
  NotFound = "*",
}

export const routes: Record<string, RouteProps> = {
  Index: {
    path: ERoute.Index,
    element: <IndexPage />,
  },
  Main: {
    path: ERoute.Main,
    element: <MainPage />,
  },
  AdminPage: {
    path: ERoute.AdminPage,
    element: <AdminPage />,
  },
  CommandsPage: {
    path: ERoute.CommandsPage,
    element: <CommandsPage />,
  },
  NotFound: {
    path: ERoute.NotFound,
    element: <NotFoundPage />,
  },
};
