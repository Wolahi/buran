import React, { PropsWithChildren } from "react";

import { AuthContext } from "@/app/module/context/AuthContext.ts";
import useAuth from "@/app/module/hooks/useAuth.ts";

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { login, isAuth, logout, token } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isAuth,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
