import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { $api } from "@/shared/api/apiInstance.ts";
import { INews } from "@/shared/config/interfaces/INews.ts";

const useGetNews = () => {
  const { id } = useParams();
  const [news, setNews] = useState<INews[]>([]);

  useEffect(() => {
    (async () => {
      const res = await $api.get("/api/seasons/news", {
        params: {
          season: id,
        },
      });
      setNews(res.data);
    })();
  }, [id]);

  return { news, setNews };
};

export default useGetNews;
