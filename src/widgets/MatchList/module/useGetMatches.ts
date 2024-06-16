import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { $api } from "@/shared/api/apiInstance.ts";
import { IMatchInfo } from "@/shared/config/interfaces/IMatchInfo.ts";

const useGetMatches = () => {
  const { id } = useParams();
  const [matches, setMatches] = useState<IMatchInfo[]>([]);

  useEffect(() => {
    (async () => {
      const res = await $api.get("/api/seasons/matches", {
        params: {
          season: id,
        },
      });
      setMatches(res.data);
    })();
  }, [id]);

  return { matches, setMatches };
};

export default useGetMatches;
