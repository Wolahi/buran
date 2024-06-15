import styles from "./NewsDetail.module.scss";

import { CustomTypography } from "@/shared/ui/CustomTypography";
import { INews } from "@/shared/config/interfaces/INews";

type NewsDetailProps = {
  news?: INews;
};

const NewsDetail = ({ news }: NewsDetailProps) => {
  return (
    <div className={styles.news}>
      <div className="inner">
        <div className={styles.news__card}>
          <div className={styles.news__image}>
            {" "}
            <img
              src={news?.photos[0]}
              alt=""
            />
          </div>
          <div className={styles.news__content}>
            <CustomTypography
              className={styles.news__title}
              type="h2"
            >
              {news?.title}
            </CustomTypography>
            <CustomTypography
              className={styles.news__text}
              type="h2"
            >
              {news?.text}
            </CustomTypography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
