import style from "./commandspage.module.scss";
import styles from "@/entity/Match/ui/Match.module.scss";

import PlayerImage from "@/shared/ui/PlayerImage/ui/PlayerImage.tsx";

const CommandsPage = () => (
  <div className={style.cpage}>
    <div className={style.cpage__container}>
      <div className={style.cpage__items}>
        <div className={styles.item}>
          <div className={styles.slider}>
            <PlayerImage player={player} />
          </div>
        </div>
        <div>
          <div className={style.cpage__name}>Иван Иванович Иванов</div>
          <div className={style.cpage__number}>52</div>
          <div>role</div>
        </div>
      </div>
    </div>
  </div>
);

export default CommandsPage;
