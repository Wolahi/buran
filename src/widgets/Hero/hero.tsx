import { Button } from "antd";

import style from "./hero.module.scss";

import buran_mp4 from "@/assets/hero/buran_vid.mp4";
import buran_webm from "@/assets/hero/buran_vid.webm";

const Hero = () => (
  <div className={style.root}>
    <video autoPlay loop muted playsInline className={style.hero}>
      <source src={buran_webm} type="video/webm" />
      <source src={buran_mp4} type="video/mp4" />
    </video>
    <div className={style.bg} />
    <div className={style.container}>
      <span className={style.text}>БУРАН - ВМЕСТЕ К ПОБЕДЕ!</span>
      <Button className={style.button} href="#archive">
        Посмотреть сезоны
      </Button>
    </div>
  </div>
);

export default Hero;
