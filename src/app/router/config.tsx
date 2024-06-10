import { RouteProps } from "react-router";

import { AdminPage, CommandsPage, IndexPage, MainPage } from "../../pages";

export const routes: Record<string, RouteProps> = {
  Index: {
    path: "/",
    element: <IndexPage />,
  },
  Main: {
    path: "/main",
    element: <MainPage />,
  },
  AdminPage: {
    path: "/admin",
    element: <AdminPage />,
  },
  CommandsPage: {
    path: "/commands",
    element: <CommandsPage />,
  },
};
