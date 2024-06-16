import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { $api } from "@/shared/api/apiInstance.ts";
import { IActionsTeam } from "@/shared/config/interfaces/IActionsTeams";
import { IActions } from "@/shared/config/interfaces/IActions";

const useGetCommandStat = () => {
  const { id } = useParams();
  const [actionsTeam, setActionsTeam] = useState<IActionsTeam>();
  const [actions, setActions] = useState<IActions>();
  useEffect(() => {
    (async () => {
      const res = await $api.get(`/api/seasons/stats`, {
        params: {
          season: id,
        },
      });
      setActionsTeam(res.data.stats);
    })();
  }, [id]);
  useEffect(() => {
    if (actionsTeam != undefined) {
      const temp: IActions = {
        BAD: actionsTeam.BAD.team,
        ENTRY: actionsTeam.ENTRY.team,
        FINE: actionsTeam.FINE.team,
        GOAL: actionsTeam.GOAL.team,
        MISS: actionsTeam.MISS.team,
        SWAP: actionsTeam.SWAP.team,
      };
      setActions(temp);
    }
  }, [actionsTeam]);

  return { actions };
};

export default useGetCommandStat;
