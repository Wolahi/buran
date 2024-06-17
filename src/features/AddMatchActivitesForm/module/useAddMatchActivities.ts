import { AxiosResponse } from "axios";

import { IAddMatchActivitiesInput } from "../ui/interfaces/IAddMatchActivitiesInput";

import { $api } from "@/shared/api/apiInstance.ts";
import { IMatchResult } from "@/shared/config/interfaces/IMatchResult";

const useAddMatchActivities = (idMatch: number) => {
  const addMatchActivities = async (
    data: IAddMatchActivitiesInput,
  ): Promise<AxiosResponse<IMatchResult>> =>
    await $api.post(`/api/seasons/matches/${idMatch}/result`, data);

  return { addMatchActivities };
};

export default useAddMatchActivities;
