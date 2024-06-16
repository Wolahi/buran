import PlayerImage from "@/shared/ui/PlayerImage/ui/PlayerImage";
import styles from "./CommandsPlayer.module.scss";
import { CommandsPlayerProps } from "./interfaces/CommandsProps";

const CommandsPlayer = ({ player }: CommandsPlayerProps) => (
  <div className={styles.cpage__item}>
    <div className={styles.item}>
      <div className={styles.slider}>
        <PlayerImage player={player} />
      </div>
    </div>
    <div>
      <div className={styles.cpage__name}>{player?.name}</div>
      <div className={styles.cpage__number}>{player?.number}</div>
      <div>{player?.type}</div>
    </div>
  </div>
);

export default CommandsPlayer;
