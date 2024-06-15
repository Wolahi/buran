import style from "./SeasonList.module.scss";

import SeasonItem from "@/entity/SeasonItem/SeasonItem";

type SeasonListProps = {
  items: {
    id: string;
    title: string;
    link: string;
  }[];
};

const SeasonList = ({ items }: SeasonListProps) => (
  <div className={style.seasonList}>
    {items.map((el) => (
      <SeasonItem key={el.id} title={el.title} link={el.link} />
    ))}
  </div>
);

export default SeasonList;
