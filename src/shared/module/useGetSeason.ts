import { useEffect, useState } from "react";

import { $api } from "@/shared/api/apiInstance.ts";
import { ISeasonOutput } from "@/shared/config/interfaces/ISeasonOutput.ts";

const useGetSeason = () => {
  const [seasons, setSeasons] = useState<ISeasonOutput[]>([]);

  const getSeasons = async () => $api.get("/api/seasons");

  useEffect(() => {
    (async () => {
      const res = await getSeasons();
      setSeasons(res.data);
    })();
  }, []);

  return { seasons };
};

export default useGetSeason;
