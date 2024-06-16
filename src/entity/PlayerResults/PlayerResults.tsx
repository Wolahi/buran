import { CustomTypography } from "@/shared/ui/CustomTypography";
import styles from "./PlayerResults.module.scss";

import { PlayerResultsProps } from "./interfaces/PlayerResultsProps";
import { translateRolePlayer } from "@/shared/config/translateRoleTeam";
import { Link } from "react-router-dom";

const PlayerResults = ({ player, actions }: PlayerResultsProps) => (
  <Link
    to={`/commands/player/${player?.id}`}
    className={styles.PlayerResults}
  >
    <div className={styles.PlayerResults__head}>
      <div className={styles.PlayerResults__image}>
        <img
          src={player?.url}
          alt="player"
        />
      </div>
      <div className={styles.PlayerResults__content}>
        <CustomTypography
          type="textMs"
          className={styles.PlayerResults__name}
        >
          {player?.name}
        </CustomTypography>
        <div className={styles.PlayerResults__amplua}>
          <CustomTypography
            type="textMs"
            className={styles.PlayerResults__number}
          >
            {player?.number}
          </CustomTypography>
          <CustomTypography
            type="textMs"
            className={styles.PlayerResults__type}
          >
            {translateRolePlayer[player?.type]}
          </CustomTypography>
        </div>
        <div className={styles.PlayerResults__stats}>
          <div className={styles.PlayerResults__col}>
            <div className={styles.PlayerResults__colHead}>Голы</div>
            <div className={styles.PlayerResults__colVal}>{actions?.GOAL}</div>
          </div>
          <div className={styles.PlayerResults__col}>
            <div className={styles.PlayerResults__colHead}>Штрафы</div>
            <div className={styles.PlayerResults__colVal}>{actions?.BAD}</div>
          </div>
          <div className={styles.PlayerResults__col}>
            <div className={styles.PlayerResults__colHead}>Замены</div>
            <div className={styles.PlayerResults__colVal}>{actions?.SWAP}</div>
          </div>
          <div className={styles.PlayerResults__col}>
            <div className={styles.PlayerResults__colHead}>Промахи</div>
            <div className={styles.PlayerResults__colVal}>{actions?.MISS}</div>
          </div>
          <div className={styles.PlayerResults__col}>
            <div className={styles.PlayerResults__colHead}>Защита</div>
            <div className={styles.PlayerResults__colVal}>{actions?.FINE}</div>
          </div>
          <div className={styles.PlayerResults__col}>
            <div className={styles.PlayerResults__colHead}>Перехват</div>
            <div className={styles.PlayerResults__colVal}>{actions?.ENTRY}</div>
          </div>
        </div>
      </div>
    </div>
    <div
      className={`${styles.PlayerResults__statsTablet} ${styles.PlayerResults__stats}`}
    >
      <div className={styles.PlayerResults__col}>
        <div className={styles.PlayerResults__colHead}>Голы</div>
        <div className={styles.PlayerResults__colVal}>{actions?.GOAL}</div>
      </div>
      <div className={styles.PlayerResults__col}>
        <div className={styles.PlayerResults__colHead}>Штрафы</div>
        <div className={styles.PlayerResults__colVal}>{actions?.BAD}</div>
      </div>
      <div className={styles.PlayerResults__col}>
        <div className={styles.PlayerResults__colHead}>Замены</div>
        <div className={styles.PlayerResults__colVal}>{actions?.SWAP}</div>
      </div>
      <div className={styles.PlayerResults__col}>
        <div className={styles.PlayerResults__colHead}>Промахи</div>
        <div className={styles.PlayerResults__colVal}>{actions?.MISS}</div>
      </div>
      <div className={styles.PlayerResults__col}>
        <div className={styles.PlayerResults__colHead}>Защита</div>
        <div className={styles.PlayerResults__colVal}>{actions?.FINE}</div>
      </div>
      <div className={styles.PlayerResults__col}>
        <div className={styles.PlayerResults__colHead}>Перехват</div>
        <div className={styles.PlayerResults__colVal}>{actions?.ENTRY}</div>
      </div>
    </div>
  </Link>
);

export default PlayerResults;
