import classNames from "classnames";

import styles from "./PlayerPage.module.scss";
import PlayerDetail from "@/widgets/PlayerDetail/PlayerDetail";
import useGetPlayerById from "@/widgets/PlayerDetail/module/useGetPlayerById";

const PlayerPage = () => {
  const { player } = useGetPlayerById();

  return (
    <section className={classNames(styles.root)}>
      <div className="inner">
        <PlayerDetail player={player} />
      </div>
    </section>
  );
};

export default PlayerPage;
