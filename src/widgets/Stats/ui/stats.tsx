import PlayerResults from "@/entity/PlayerResults/PlayerResults";
import style from "./stats.module.scss";
import useGetBestPlayer from "../module/useGetPlayer";
import { CustomTypography } from "@/shared/ui/CustomTypography";
import CommandsStats from "@/entity/CommandsStats/CommandsStats";
import useGetCommandStat from "../module/useGetCommandStat";

const Stats = () => {
  const { player, actions } = useGetBestPlayer();

  const { commandsStats, setCommandsStats } = useGetCommandStat();
  return (
    <div className={style.stats}>
      <CustomTypography type="title">Лучший игрок:</CustomTypography>
      <PlayerResults
        player={player}
        actions={actions}
      />
      <CustomTypography type="title">
        Статистика в текущем сезоне:
      </CustomTypography>
      <CommandsStats
        commandsStats={commandsStats}
        setCommandsStats={setCommandsStats}
      />
    </div>
  );
};
export default Stats;
