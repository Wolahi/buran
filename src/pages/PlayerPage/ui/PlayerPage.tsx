import classNames from "classnames";

import styles from "./PlayerPage.module.scss";
import PlayerDetail from "@/widgets/PlayerDetail/PlayerDetail";
import useGetPlayerById from "@/widgets/PlayerDetail/module/useGetPlayerById";
import { useParams } from "react-router";

const PlayerPage = () => {
  const { playerId } = useParams();
  const { player } = useGetPlayerById((playerId as any) | 0);

  return (
    <section className={classNames(styles.root)}>
      <div className="inner">
        <PlayerDetail player={player} />
      </div>
    </section>
  );
};

export default PlayerPage;
