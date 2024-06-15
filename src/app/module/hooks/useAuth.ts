import { useEffect, useState } from "react";

const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    const tempToken = localStorage.getItem("authToken");
    if (tempToken) {
      setToken(tempToken);
      setIsAuth(true);
    }
  }, []);

  const logout = () => {
    setToken(null);
    setIsAuth(false);
  };

  const login = (token: string) => {
    setToken(token);
    localStorage.setItem("authToken", token);
    setIsAuth(true);
  };

  return { token, isAuth, logout, login };
};

export default useAuth;
