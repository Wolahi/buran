import { useEffect, useState } from "react";

import { $api } from "@/shared/api/apiInstance.ts";
import { IPlayerSimpleOutput } from "@/shared/config/interfaces/IPlayerSimpleOutput";

const useGetPlayerById = (playerId: number) => {
  const [player, setPlayer] = useState<IPlayerSimpleOutput>();

  useEffect(() => {
    (async () => {
      if (playerId) {
        const res = await $api.get(`/api/players/${playerId}`, {});
        setPlayer(res.data);
      }
    })();
  }, [playerId]);

  return { player };
};

export default useGetPlayerById;
