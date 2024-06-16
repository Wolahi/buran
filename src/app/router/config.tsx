import { ReactElement } from "react";

import {
  AdminLogin,
  CommandsPage,
  IndexPage,
  MainPage,
  NewsDetailPage,
  NotFoundPage,
  SeasonPage,
} from "@/pages";

export enum ERoute {
  Index = "/index",
  Main = "/",
  AdminLogin = "/login",
  CommandsPage = "/commands/:id",
  SeasonPage = "/season/:id",
  newsDetailPage = "/news/:seasonId/:newsId",
  NotFound = "*",
}

export interface IRouteProps {
  path: ERoute;
  element: ReactElement;
  isAdmin: boolean;
}

export const routes: Record<string, IRouteProps> = {
  Index: {
    path: ERoute.Index,
    element: <IndexPage />,
    isAdmin: false,
  },
  Main: {
    path: ERoute.Main,
    element: <MainPage />,
    isAdmin: false,
  },
  AdminLogin: {
    path: ERoute.AdminLogin,
    element: <AdminLogin />,
    isAdmin: false,
  },
  SeasonPage: {
    path: ERoute.SeasonPage,
    element: <SeasonPage />,
    isAdmin: false,
  },
  newsDetailPage: {
    path: ERoute.newsDetailPage,
    element: <NewsDetailPage />,
    isAdmin: false,
  },
  CommandsPage: {
    path: ERoute.CommandsPage,
    element: <CommandsPage />,
    isAdmin: false,
  },
  NotFound: {
    path: ERoute.NotFound,
    element: <NotFoundPage />,
    isAdmin: false,
  },
};
