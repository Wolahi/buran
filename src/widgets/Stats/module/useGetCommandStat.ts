import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { $api } from "@/shared/api/apiInstance.ts";
import { ICommandStats } from "@/shared/config/interfaces/ICommandStats";

const useGetCommandStat = () => {
  const { id } = useParams();

  const [commandsStats, setCommandsStats] = useState<ICommandStats>();

  useEffect(() => {
    (async () => {
      const res = await $api.get(`/api/seasons/stats/statsTable`, {
        params: { season: id },
      });
      setCommandsStats(res.data);
    })();
  }, [id]);

  return { commandsStats, setCommandsStats };
};

export default useGetCommandStat;
