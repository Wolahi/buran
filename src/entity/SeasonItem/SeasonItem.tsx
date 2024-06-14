import { Link } from "react-router-dom";

import style from "./SeasonItem.module.scss";

type SeasonItemProps = {
  title: string;
  link: string;
};

const SeasonItem = ({ title, link }: SeasonItemProps) => (
  <Link to={link} className={style.seasonItem__title}>
    <div className={style.seasonItem}>{title}</div>
  </Link>
);

export default SeasonItem;
