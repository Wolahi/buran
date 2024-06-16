import styles from "./PlayerDetail.module.scss";

import { IPlayerSimpleOutput } from "@/shared/config/interfaces/IPlayerSimpleOutput";

type PlayerDetailProps = {
  player?: IPlayerSimpleOutput;
};

const PlayerDetail = ({ player }: PlayerDetailProps) => {
  return (
    <div className={styles.news}>
      <div>{player?.biography}</div>
      <div>{player?.number}</div>
      <div>{player?.type}</div>
      <img
        src={player?.url}
        alt=""
      />
    </div>
  );
};

export default PlayerDetail;
