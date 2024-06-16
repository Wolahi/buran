import { AxiosResponse } from "axios";

import { $api } from "@/shared/api/apiInstance.ts";
import { INews } from "@/shared/config/interfaces/INews.ts";
import { IAddMatchInput } from "../ui/interfaces/IAddMatchInput";

const useAddMatch = () => {
  const addMatch = async (
    data: IAddMatchInput
  ): Promise<AxiosResponse<INews>> =>
    await $api.post("/api/seasons/matches", data);

  return { addMatch };
};

export default useAddMatch;
