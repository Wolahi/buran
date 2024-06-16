import PlayerResults from "@/entity/PlayerResults/PlayerResults";
import style from "./stats.module.scss";
import useGetBestPlayer from "../module/useGetPlayer";
import { CustomTypography } from "@/shared/ui/CustomTypography";

const Stats = () => {
  const { player, actions } = useGetBestPlayer();

  return (
    <div className={style.stats}>
      <CustomTypography type="title">Лучший игрок:</CustomTypography>
      <PlayerResults
        player={player}
        actions={actions}
      />
    </div>
  );
};
export default Stats;
