import styles from "./NewsList.module.scss";

import News from "@/entity/News/ui/News.tsx";
import { seasonNewsMock } from "@/shared/config/seasonNewsMock.ts";
import { CustomTypography } from "@/shared/ui/CustomTypography";

const NewsList = () => (
  <div className={styles.root}>
    <CustomTypography type="h3">Новости сезона</CustomTypography>
    <div className={styles.list}>
      {seasonNewsMock.map((news) => (
        <News news={news} />
      ))}
    </div>
  </div>
);

export default NewsList;
