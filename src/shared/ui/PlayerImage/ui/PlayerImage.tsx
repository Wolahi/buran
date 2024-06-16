import styles from "./PlayerImage.module.scss";

import { IPlayerImageProps } from "@/shared/ui/PlayerImage/ui/interfaces/IPlayerImageProps.ts";
import { translateRolePlayer } from "@/shared/config/translateRoleTeam.ts";

const PlayerImage = ({ player }: IPlayerImageProps) => (
  <div className={styles.video__item}>
    <div className={styles.video__content}>
      <span className={styles.video__subtitle}>Номер</span>
      <h3 className={styles.video__itemTitle}>{player.number}</h3>
      <span className={styles.video__subtitle}>Роль</span>
      <h3 className={styles.video__itemTitle}>
        {translateRolePlayer[player.type]}
      </h3>
      <span className={styles.video__subtitle}>Игрок</span>
      <h3 className={styles.video__itemTitle}>{player.name}</h3>
    </div>
    <div className={styles.video__box}>
      <img
        src={player.url}
        alt={player.name}
      />
    </div>
  </div>
);

export default PlayerImage;
