import style from "./about.module.scss";

import BuranHistory from "@/widgets/BuranHistory/buranhistory.tsx";
import Sponsors from "@/widgets/Sponsors/sponsors.tsx";

const About = () => (
  <div className={style.about}>
    <BuranHistory />
    <Sponsors />
  </div>
);
export default About;
