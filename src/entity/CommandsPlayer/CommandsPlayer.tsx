import { CommandsPlayerProps } from "./interfaces/CommandsProps";

import styles from "./CommandsPlayer.module.scss";

import PlayerImage from "@/shared/ui/PlayerImage/ui/PlayerImage";

const CommandsPlayer = ({ player }: CommandsPlayerProps) => (
  <div className={styles.cpage__container}>
    <div className={styles.slider}>
      <PlayerImage player={player} />
    </div>
    <div className={styles.cpage__items}>
      <div className={styles.cpage__name}>{player?.name}</div>
      <div className={styles.cpage__number}>{player?.number}</div>
      <div className={styles.cpage__role}>{player?.type}</div>
    </div>
  </div>
);

export default CommandsPlayer;
