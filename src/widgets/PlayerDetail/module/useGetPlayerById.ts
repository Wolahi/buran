import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { $api } from "@/shared/api/apiInstance.ts";
import { IPlayerSimpleOutput } from "@/shared/config/interfaces/IPlayerSimpleOutput";

const useGetPlayerById = () => {
  const { playerId } = useParams();
  const [player, setPlayer] = useState<IPlayerSimpleOutput>();

  useEffect(() => {
    (async () => {
      const res = await $api.get(`/api/players/${playerId}`, {});
      setPlayer(res.data);
    })();
  }, [playerId]);

  return { player };
};

export default useGetPlayerById;
