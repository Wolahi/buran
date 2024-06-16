import NewsDetail from "@/widgets/NewsDetail/NewsDetail";
import styles from "./NewsDetailPage.module.scss";
import useGetNewsById from "@/widgets/NewsDetail/module/useGetNewsById";

const NewsDetailPage = () => {
  const { news } = useGetNewsById();

  return (
    <section className={styles.root}>
      <NewsDetail news={news} />
    </section>
  );
};

export default NewsDetailPage;
