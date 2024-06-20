import { useParams } from "react-router";
import { AxiosResponse } from "axios";

import { IAddStatsActivitiesInput } from "../ui/interfaces/IAddStatsActivitiesInput";

import { $api } from "@/shared/api/apiInstance.ts";
import { ICommandStats } from "@/shared/config/interfaces/ICommandStats";

const useAddsStatsActivities = () => {
  const { id } = useParams();
  const addStatsActivities = async (
    data: IAddStatsActivitiesInput,
  ): Promise<AxiosResponse<ICommandStats>> =>
    await $api.put(`/api/seasons/stats/statsTable`, data, {
      params: { season: id },
    });

  return { addStatsActivities };
};

export default useAddsStatsActivities;
