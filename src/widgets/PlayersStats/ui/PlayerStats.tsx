import style from "./PlayersStats.module.scss";

import PlayerResults from "@/entity/PlayerResults/PlayerResults.tsx";
import { CustomTypography } from "@/shared/ui/CustomTypography";
import useGetStatsPlayer from "@/widgets/PlayersStats/module/useGetStatsPlayer.ts";

const PlayersStats = () => {
  const { players } = useGetStatsPlayer();

  return (
    <div className={style.cplayers}>
      <CustomTypography type="h2" className={style.cplayers__title}>
        Игроки этого сезона:
      </CustomTypography>
      <div className={style.cplayers__container}>
        {players.map((el) => (
          <PlayerResults
            key={el.player.id}
            player={el.player}
            actions={el.actions}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayersStats;
