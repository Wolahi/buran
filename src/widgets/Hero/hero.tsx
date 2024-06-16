import style from "./hero.module.scss";

import buran_mp4 from "@/assets/hero/buran_vid.mp4";
import buran_webm from "@/assets/hero/buran_vid.webm";
import useGetSeason from "@/shared/module/useGetSeason";
import { useMemo } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const { seasons } = useGetSeason();

  const data = useMemo(
    () =>
      seasons
        .map((season) => ({
          id: season.title,
          text: `Сезон ${season.title} гг.`,
          link: `/season/${season.title}`,
        }))
        .splice(0, 2),
    [seasons]
  );

  return (
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
          <a
            className={style.hero__button}
            href="#sectionSeasons"
          >
            Посмотреть список сезонов
          </a>
          <Link
            className={style.hero__button}
            to={`/commands`}
          >
            Посмотреть команду
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
