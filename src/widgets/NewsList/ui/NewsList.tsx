import styles from "./NewsList.module.scss";

import News from "@/entity/News/ui/News.tsx";
import useGetNews from "@/widgets/NewsList/module/useGetNews.ts";

const NewsList = () => {
  const { news } = useGetNews();
  return (
    <div className={styles.root}>
      <div className={styles.list}>
        {news.map((news) => (
          <News news={news} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
