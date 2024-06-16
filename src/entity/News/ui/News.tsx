import { Link, useParams } from "react-router-dom";
import { Card } from "antd";

import styles from "./News.module.scss";

import { ICardNewsProps } from "@/entity/News/ui/interfaces/ICardNewsProps.ts";
import { CustomTypography } from "@/shared/ui/CustomTypography";
import SandClock from "@/assets/clock.svg?react";
import { useAuthContext } from "@/app/module/hooks/useAuthContext";
import Delete from "@/assets/delete.svg?react";
import useDeleteNews from "../module/useDeleteNews";

const { Meta } = Card;

const News = ({ news, setNews }: ICardNewsProps) => {
  const { id } = useParams();
  const { isAuth } = useAuthContext();
  const { deleteNews } = useDeleteNews();
  const onDelete = async () => {
    await deleteNews(news.id);
    setNews((prev) => prev.filter((val) => news.id !== val.id));
  };
  return (
    <div className={styles.cardWrapper}>
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
            title={
              <CustomTypography type="textMs">{news.text}</CustomTypography>
            }
          />
        </Card>
      </Link>
      {isAuth && (
        <button
          type="button"
          className={styles.news__delete}
          onClick={onDelete}
        >
          <Delete />
        </button>
      )}
    </div>
  );
};

export default News;
