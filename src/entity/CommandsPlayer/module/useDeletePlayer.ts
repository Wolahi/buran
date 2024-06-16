import { AxiosResponse } from "axios";

import { $api } from "@/shared/api/apiInstance.ts";
import { IPlayerSimpleOutput } from "@/shared/config/interfaces/IPlayerSimpleOutput";

const useDeletePlayer = () => {
  const deletePlayer = async (
    id: number
  ): Promise<AxiosResponse<IPlayerSimpleOutput>> =>
    await $api.delete(`/api/players/${id}`);

  return { deletePlayer };
};

export default useDeletePlayer;
