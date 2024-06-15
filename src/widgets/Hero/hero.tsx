import style from "./hero.module.scss";

import buran_mp4 from "@/assets/hero/buran_vid.mp4";
import buran_webm from "@/assets/hero/buran_vid.webm";
import { Link } from "react-router-dom";

const Hero = () => (
  <div className={style.hero}>
    <video
      autoPlay
      loop
      muted
      playsInline
      className={style.hero__video}
    >
      <source
        src={buran_webm}
        type="video/webm"
      />
      <source
        src={buran_mp4}
        type="video/mp4"
      />
    </video>
    <div className={style.hero__container}>
      <span className={style.hero__text}>
        БУРАН&nbsp;-&nbsp;ВМЕСТЕ К&nbsp;ПОБЕДЕ!
      </span>
      <div className={style.hero__buttons}>
        <Link
          className={style.hero__button}
          to="/#sectionSeasons"
        >
          Посмотреть список сезонов
        </Link>
        <Link
          className={style.hero__button}
          to="/commands"
        >
          Посмотреть команду
        </Link>
      </div>
    </div>
  </div>
);

export default Hero;
