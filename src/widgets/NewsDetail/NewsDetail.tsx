import styles from "./NewsDetail.module.scss";

import { CustomTypography } from "@/shared/ui/CustomTypography";
import { INews } from "@/shared/config/interfaces/INews";
import SandClock from "@/assets/clock.svg?react";

type NewsDetailProps = {
  news?: INews;
};

const NewsDetail = ({ news }: NewsDetailProps) => {
  return (
    <div className={styles.news}>
      <div className="inner">
        <div className={styles.news__card}>
          <div className={styles.news__head}>
            <div className={styles.news__image}>
              {" "}
              <img
                src={news?.photos}
                alt=""
              />
            </div>
            <CustomTypography
              className={styles.news__title}
              type="h2"
            >
              <span className={styles.news__date}>
                <SandClock />
                {news?.date}
              </span>
              {news?.title}
            </CustomTypography>
          </div>
          <CustomTypography
            className={styles.news__text}
            type="textM"
          >
            {news?.text}
          </CustomTypography>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
