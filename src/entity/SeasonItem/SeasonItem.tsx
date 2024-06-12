import { Link } from "react-router-dom";

import style from "./SeasonItem.module.scss";

type SeasonItemProps = {
  title: string;
  link: string;
};

const SeasonItem = ({ title, link }: SeasonItemProps) => (
  <div className={style.seasonItem}>
    <Link
      to={link}
      className={style.seasonItem__title}
    >
      {title}
    </Link>
  </div>
);

export default SeasonItem;
