import { CommandsPlayerProps } from "./interfaces/CommandsProps";

import styles from "./CommandsPlayer.module.scss";

import { Link } from "react-router-dom";
import { translateRolePlayer } from "@/shared/config/translateRoleTeam.ts";

const CommandsPlayer = ({ player }: CommandsPlayerProps) => {
  return (
    <Link
      to={`player/${player.id}`}
      className={styles.cpage__container}
    >
      <div className={styles.cpage__wrapper}>
        <div className={styles.cpage__image}>
          <img
            src={player?.url}
            alt={player?.name}
          />
        </div>
      </div>

      <div className={styles.cpage__items}>
        <div className={styles.cpage__name}>{player?.name}</div>
        <div className={styles.cpage__number}>{player?.number}</div>
        <div className={styles.cpage__role}>
          {translateRolePlayer[player?.type]}
        </div>
      </div>
    </Link>
  );
};

export default CommandsPlayer;
