import { createContext } from "react";

import { IAuthContext } from "@/app/module/context/interfaces/IAuthContext.ts";

export const AuthContext = createContext<IAuthContext>({
  isAuth: false,
  token: null,
});
