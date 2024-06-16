import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { $api } from "@/shared/api/apiInstance.ts";
import { IPlayerSimpleOutput } from "@/shared/config/interfaces/IPlayerSimpleOutput";
import { IActions } from "@/shared/config/interfaces/IActions";

const useGetBestPlayer = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState<IPlayerSimpleOutput>();

  const [actions, setActions] = useState<IActions>();

  useEffect(() => {
    (async () => {
      const res = await $api.get(`/api/seasons/stats`, {
        params: {
          season: id,
        },
      });
      setPlayer(res.data.bestPlayer.player);
      setActions(res.data.bestPlayer.actions);
    })();
  }, [id]);

  return { player, actions };
};

export default useGetBestPlayer;
