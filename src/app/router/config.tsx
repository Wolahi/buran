import { RouteProps } from "react-router";

import {
  AdminPage,
  CommandsPage,
  IndexPage,
  MainPage,
  NotFoundPage, SeasonPage,
} from "@/pages";

export enum ERoute {
  Index = "/",
  Main = "/main",
  AdminPage = "/admin",
  CommandsPage = "/commands",
  SeasonPage = '/season/:id',
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
  SeasonPage: {
    path: ERoute.SeasonPage,
    element: <SeasonPage />,
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
