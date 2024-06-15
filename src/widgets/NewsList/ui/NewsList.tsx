import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";

import styles from "./NewsList.module.scss";

import { useAuthContext } from "@/app/module/hooks/useAuthContext.ts";
import News from "@/entity/News/ui/News.tsx";
import AddNewsForm from "@/features/AddNewsForm/ui/AddNewsForm.tsx";
import useGetNews from "@/widgets/NewsList/module/useGetNews.ts";

const NewsList = () => {
  const { news, setNews } = useGetNews();
  const [open, setOpen] = useState(false);
  const { isAuth } = useAuthContext();

  return (
    <div className={styles.root}>
      <div className={styles.list}>
        {news.map((news) => (
          <News key={news.id} news={news} />
        ))}
        {isAuth && (
          <FloatButton icon={<PlusOutlined />} onClick={() => setOpen(true)} />
        )}
        <AddNewsForm
          setNews={setNews}
          open={open}
          onClose={() => setOpen(false)}
        />
      </div>
    </div>
  );
};

export default NewsList;
