import { Card } from "antd";

import styles from "./News.module.scss";

import { ICardNewsProps } from "@/entity/News/ui/interfaces/ICardNewsProps.ts";
import { CustomTypography } from "@/shared/ui/CustomTypography";
import { Link, useParams } from "react-router-dom";
import SandClock from "@/assets/clock.svg?react";

const { Meta } = Card;

const News = ({ news }: ICardNewsProps) => {
  const { id } = useParams();

  return (
    <Link
      to={`/news/${id}/${news.id}`}
      className={styles.news}
    >
      <Card
        classNames={{ body: styles.news__body }}
        className={styles.news__card}
        cover={
          <div className={styles.news__image}>
            {" "}
            <img
              src={news.photos}
              alt="cover"
            />
          </div>
        }
      >
        <span className={styles.news__date}>
          <SandClock />
          {news.date}
        </span>
        <CustomTypography
          className={styles.news__title}
          type="textM"
        >
          {news.title}
        </CustomTypography>
        <Meta
          className={styles.news__text}
          title={<CustomTypography type="textMs">{news.text}</CustomTypography>}
        />
      </Card>
    </Link>
  );
};

export default News;
