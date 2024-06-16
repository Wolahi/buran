import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { $api } from "@/shared/api/apiInstance.ts";
import { INews } from "@/shared/config/interfaces/INews.ts";

const useGetNewsById = () => {
  const { seasonId, newsId } = useParams();
  const [news, setNews] = useState<INews>();

  useEffect(() => {
    (async () => {
      const res = await $api.get(`/api/seasons/news/${newsId}`, {
        params: {
          season: seasonId,
        },
      });
      setNews(res.data);
    })();
  }, [seasonId, newsId]);

  return { news };
};

export default useGetNewsById;
