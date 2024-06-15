import PlayerResults from "@/entity/PlayerResults/PlayerResults";
import style from "./stats.module.scss";
import useGetBestPlayer from "../module/useGetPlayer";

const Stats = () => {
  const { player, actions } = useGetBestPlayer();

  return (
    <div className={style.about}>
      <PlayerResults
        player={player}
        actions={actions}
      />
    </div>
  );
};
export default Stats;
