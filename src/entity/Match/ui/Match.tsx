import { List } from "antd";
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./Match.module.scss";

import "swiper/css";
import "swiper/css/pagination";
import Logo from "@/assets/logo.png";
import { IMatchProps } from "@/entity/Match/ui/interfaces/IMatchProps.ts";
import { CustomTypography } from "@/shared/ui/CustomTypography";
import PlayerImage from "@/shared/ui/PlayerImage/ui/PlayerImage.tsx";

const Match = ({ match }: IMatchProps) => (
  <List.Item>
    <div className={styles.root}>
      <div className={styles.item}>
        <CustomTypography type="subtitle">Команда на поле</CustomTypography>
        <Swiper
          direction="vertical"
          slidesPerView={1}
          spaceBetween={30}
          mousewheel
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className={styles.slider}
        >
          {match.team.map((player) => (
            <SwiperSlide key={player.id}>
              <PlayerImage player={player} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.vsEnemy}>
        <img src={Logo} alt="Buran" />
        <CustomTypography>Против</CustomTypography>
        <img src={match.enemy} alt="Buran" />
      </div>
    </div>
  </List.Item>
);

export default Match;
