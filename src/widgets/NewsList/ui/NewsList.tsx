import styles from "./NewsList.module.scss";

import News from "@/entity/News/ui/News.tsx";
import { seasonNewsMock } from "@/shared/config/seasonNewsMock.ts";

const NewsList = () => (
  <div className={styles.root}>
    <div className={styles.list}>
      {seasonNewsMock.map((news) => (
        <News news={news} />
      ))}
    </div>
  </div>
);

export default NewsList;
