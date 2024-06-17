import { AxiosResponse } from "axios";

import { $api } from "@/shared/api/apiInstance.ts";
import { IAddStatsActivitiesInput } from "../ui/interfaces/IAddStatsActivitiesInput";
import { ICommandStats } from "@/shared/config/interfaces/ICommandStats";

const useAddsStatsActivities = () => {
  const addStatsActivities = async (
    data: IAddStatsActivitiesInput
  ): Promise<AxiosResponse<ICommandStats>> =>
    await $api.put(`/api/seasons/stats/statsTable`, data);

  return { addStatsActivities };
};

export default useAddsStatsActivities;
