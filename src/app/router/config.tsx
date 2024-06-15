import { RouteProps } from "react-router";

import {
  AdminPage,
  CommandsPage,
  IndexPage,
  MainPage,
  NotFoundPage,
  SeasonPage,
  NewsDetailPage,
} from "@/pages";

export enum ERoute {
  Index = "/index",
  Main = "/",
  AdminPage = "/admin",
  CommandsPage = "/commands",
  SeasonPage = "/season/:id",
  newsDetailPage = "/news/:seasonId/:newsId",
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
  newsDetailPage: {
    path: ERoute.newsDetailPage,
    element: <NewsDetailPage />,
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
