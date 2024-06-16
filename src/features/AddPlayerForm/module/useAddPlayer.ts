import { AxiosResponse } from "axios";

import { $api } from "@/shared/api/apiInstance.ts";
import { IAddPlayerInput } from "../ui/interfaces/IAddNewsInput";
import { IPlayerSimpleOutput } from "@/shared/config/interfaces/IPlayerSimpleOutput";

const useAddPlayer = () => {
  const addPlayer = async (
    data: IAddPlayerInput
  ): Promise<AxiosResponse<IPlayerSimpleOutput>> =>
    await $api.post("/api/players", data);

  const editPlayer = async (
    id: number,
    data: IAddPlayerInput
  ): Promise<AxiosResponse<IPlayerSimpleOutput>> =>
    await $api.put(`/api/players`, { id: id, ...data });

  return { addPlayer, editPlayer };
};

export default useAddPlayer;
