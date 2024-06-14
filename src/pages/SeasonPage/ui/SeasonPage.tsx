import { useParams } from "react-router";
import { Tabs } from "antd";
import classNames from "classnames";

import styles from "./Season.module.scss";

import { items } from "@/pages/SeasonPage/config/tabs";
import { CustomTypography } from "@/shared/ui/CustomTypography";

const SeasonPage = () => {
  const { id } = useParams();
  return (
    <section className={classNames(styles.root, "inner")}>
      <div className={styles.contentSeason}>
        <CustomTypography type="title">{`Сезон ${id}`}</CustomTypography>
        <Tabs centered defaultActiveKey="1" items={items} />
      </div>
    </section>
  );
};

export default SeasonPage;
