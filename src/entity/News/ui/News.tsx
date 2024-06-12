import { Card } from "antd";

import styles from "./News.module.scss";

import { ICardNewsProps } from "@/entity/News/ui/interfaces/ICardNewsProps.ts";
import { CustomTypography } from "@/shared/ui/CustomTypography";

const { Meta } = Card;

const News = ({ news }: ICardNewsProps) => (
  <Card className={styles.root} cover={<img src={news.photos} alt="cover" />}>
    <Meta
      className={styles.bold}
      title={<CustomTypography>{news.title}</CustomTypography>}
    />
    <CustomTypography type="description">{news.text}</CustomTypography>
  </Card>
);

export default News;
