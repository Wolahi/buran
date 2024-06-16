import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { $api } from "@/shared/api/apiInstance.ts";
import { IPlayerSimpleOutput } from "@/shared/config/interfaces/IPlayerSimpleOutput";

const useGetPlayerById = () => {
  const { seasonId, playerId } = useParams();
  const [player, setPlayer] = useState<IPlayerSimpleOutput>();

  useEffect(() => {
    (async () => {
      const res = await $api.get(`/api/players/${playerId}`, {
        params: {
          season: seasonId,
        },
      });
      setPlayer(res.data);
    })();
  }, [seasonId, playerId]);

  return { player };
};

export default useGetPlayerById;
