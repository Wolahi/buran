import { AxiosResponse } from "axios";

import { IAddSeasonForm } from "@/features/AddSeasonForm/ui/interfaces/IAddSeasonForm.ts";
import { $api } from "@/shared/api/apiInstance.ts";
import { ISeasonOutput } from "@/shared/config/interfaces/ISeasonOutput.ts";

const useAddSeason = () => {
  const addSeason = async (
    data: IAddSeasonForm,
  ): Promise<AxiosResponse<ISeasonOutput>> =>
    await $api.post("/api/seasons", null, {
      params: data,
    });

  return { addSeason };
};

export default useAddSeason;
