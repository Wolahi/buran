import { AxiosResponse } from "axios";

import { $api } from "@/shared/api/apiInstance.ts";
import { IAddMatchInput } from "../ui/interfaces/IAddMatchInput";
import { IMatchInfo } from "@/shared/config/interfaces/IMatchInfo";

const useAddMatch = () => {
  const addMatch = async (
    data: IAddMatchInput
  ): Promise<AxiosResponse<IMatchInfo>> =>
    await $api.post("/api/seasons/matches", data);

  return { addMatch };
};

export default useAddMatch;
