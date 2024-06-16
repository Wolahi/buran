import { AxiosResponse } from "axios";

import { $api } from "@/shared/api/apiInstance.ts";
import { ISeasonOutput } from "@/shared/config/interfaces/ISeasonOutput.ts";

const useDeleteSeasons = () => {
  const deleteSeason = async (
    title: string,
  ): Promise<AxiosResponse<ISeasonOutput>> =>
    await $api.delete("/api/seasons", {
      params: { title },
    });

  return { deleteSeason };
};

export default useDeleteSeasons;
