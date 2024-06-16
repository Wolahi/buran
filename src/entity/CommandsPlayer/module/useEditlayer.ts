import { AxiosResponse } from "axios";

import { $api } from "@/shared/api/apiInstance.ts";
import { IPlayerSimpleOutput } from "@/shared/config/interfaces/IPlayerSimpleOutput";

const useEditPlayer = () => {
  const editPlayer = async (
    id: number,
    data: IPlayerSimpleOutput
  ): Promise<AxiosResponse<IPlayerSimpleOutput>> =>
    await $api.put(`/api/players/${id}`, data);

  return { editPlayer };
};

export default useEditPlayer;
