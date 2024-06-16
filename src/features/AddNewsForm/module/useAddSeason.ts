import { AxiosResponse } from "axios";

import { IAddNewsInput } from "@/features/AddNewsForm/ui/interfaces/IAddNewsInput.ts";
import { $api } from "@/shared/api/apiInstance.ts";
import { INews } from "@/shared/config/interfaces/INews.ts";

const useAddNews = () => {
  const addNews = async (
    data: IAddNewsInput,
    seasonId: string
  ): Promise<AxiosResponse<INews>> =>
    await $api.post("/api/seasons/news", data, {
      params: {
        season: seasonId,
      },
    });

  return { addNews };
};

export default useAddNews;
