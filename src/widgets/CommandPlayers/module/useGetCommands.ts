import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { $api } from "@/shared/api/apiInstance.ts";
import { IPlayerSimpleOutput } from "@/shared/config/interfaces/IPlayerSimpleOutput";

const useGetCommands = () => {
  const { id } = useParams();
  const [players, setPlayers] = useState<IPlayerSimpleOutput[]>([]);

  useEffect(() => {
    (async () => {
      const res = await $api.get("/api/players", {
        params: {
          season: id,
        },
      });
      setPlayers(res.data);
    })();
  }, [id]);

  return { players, setPlayers };
};

export default useGetCommands;
