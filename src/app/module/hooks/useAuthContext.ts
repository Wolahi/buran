import { useContext } from "react";

import { AuthContext } from "@/app/module/context/AuthContext.ts";

export const useAuthContext = () => useContext(AuthContext);
