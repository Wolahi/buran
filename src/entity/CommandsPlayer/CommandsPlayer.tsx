import { Link } from "react-router-dom";

import { CommandsPlayerProps } from "./interfaces/CommandsProps";

import styles from "./CommandsPlayer.module.scss";

import { translateRolePlayer } from "@/shared/config/translateRoleTeam.ts";
import PlayerImage from "@/shared/ui/PlayerImage/ui/PlayerImage";

const CommandsPlayer = ({ player }: CommandsPlayerProps) => (
  <Link to={`player/${player.id}`} className={styles.cpage__container}>
    <div className={styles.slider}>
      <PlayerImage player={player} />
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

export default CommandsPlayer;
