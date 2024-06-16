import { AxiosResponse } from "axios";

import { $api } from "@/shared/api/apiInstance.ts";
import { INews } from "@/shared/config/interfaces/INews.ts";

const useDeleteNews = () => {
  const deleteNews = async (newsId: number): Promise<AxiosResponse<INews>> =>
    await $api.delete(`/api/seasons/news/${newsId}`);

  return { deleteNews };
};

export default useDeleteNews;
