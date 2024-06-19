import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { $api } from "@/shared/api/apiInstance.ts";
import { IPlayerSimpleOutput } from "@/shared/config/interfaces/IPlayerSimpleOutput";
import { IActions } from "@/shared/config/interfaces/IActions.ts";

const useGetStatsPlayer = () => {
  const { id } = useParams();
  const [players, setPlayers] = useState<
    { player: IPlayerSimpleOutput; actions: IActions }[]
  >([]);

  useEffect(() => {
    (async () => {
      const res = await $api.get("/api/seasons/stats/players", {
        params: {
          season: id,
        },
      });
      setPlayers(res.data);
    })();
  }, [id]);

  return { players, setPlayers };
};

export default useGetStatsPlayer;
