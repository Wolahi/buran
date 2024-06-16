import { AxiosResponse } from "axios";

import { $api } from "@/shared/api/apiInstance.ts";
import { IMatchInfo } from "@/shared/config/interfaces/IMatchInfo";

const useDeleteMatch = () => {
  const deleteMatch = async (
    matchId: number
  ): Promise<AxiosResponse<IMatchInfo>> =>
    await $api.delete(`/api/seasons/matches/${matchId}`);

  return { deleteMatch };
};

export default useDeleteMatch;
