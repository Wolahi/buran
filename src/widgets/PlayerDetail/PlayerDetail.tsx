import styles from "./PlayerDetail.module.scss";

import { EPlayerType } from "@/shared/config/interfaces/EPlayerType.ts";
import { IPlayerSimpleOutput } from "@/shared/config/interfaces/IPlayerSimpleOutput";
import { translateRolePlayer } from "@/shared/config/translateRoleTeam.ts";
import { CustomTypography } from "@/shared/ui/CustomTypography";

type PlayerDetailProps = {
  player?: IPlayerSimpleOutput;
};

const PlayerDetail = ({ player }: PlayerDetailProps) => (
  <div className={styles.pdetail}>
    <div className={styles.pdetail__container}>
      <div className={styles.pdetail__items}>
        <div className={styles.pdetail__foto}>
          <img
            src={player?.url}
            alt=""
          />
        </div>
        <div className={styles.pdetail__info}>
          <div className={styles.pdetail__title}>
            <div className={styles.pdetail__name}>{player?.name}</div>
            <div className={styles.pdetail__number}>{player?.number}</div>
          </div>
          <div className={styles.pdetail__role}>
            {translateRolePlayer[player?.type as EPlayerType]}
          </div>
          <CustomTypography
            type="textMs"
            className={styles.pdetail__bio}
          >
            {player?.biography}
          </CustomTypography>
        </div>
      </div>
    </div>
  </div>
);

export default PlayerDetail;
