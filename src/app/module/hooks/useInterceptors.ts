import { useAuthContext } from "@/app/module/hooks/useAuthContext.ts";
import { $api } from "@/shared/api/apiInstance.ts";

const useInterceptors = () => {
  const { token } = useAuthContext();

  if (token) {
    $api.interceptors.request.use((config: any) => ({
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      },
    }));
  }
};

export default useInterceptors;
