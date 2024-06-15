import { AxiosResponse } from "axios";

import { ITokenOutput } from "@/features/LoginForm/module/interfaces/ITokenOutput.ts";
import { ILoginForm } from "@/features/LoginForm/ui/interfaces/ILoginForm.ts";
import { $api } from "@/shared/api/apiInstance.ts";

const useLogin = () => {
  const loginReq = async (
    data: ILoginForm,
  ): Promise<AxiosResponse<ITokenOutput>> =>
    await $api.post("/api/auth/login", data);

  return { loginReq };
};

export default useLogin;
