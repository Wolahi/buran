import { useParams } from "react-router";
import { Tabs } from "antd";
import classNames from "classnames";

import styles from "./Season.module.scss";

import { items } from "@/pages/SeasonPage/config/tabs";
import { CustomTypography } from "@/shared/ui/CustomTypography";

const SeasonPage = () => {
  const { id } = useParams();
  return (
    <section className={classNames(styles.root)}>
      <div className="inner">
        <div className={styles.contentSeason}>
          <CustomTypography type="h2">{`Сезон ${id}`}</CustomTypography>
          <Tabs
            className={styles.season__tabs}
            centered
            defaultActiveKey="1"
            items={items}
          />
        </div>
      </div>
    </section>
  );
};

export default SeasonPage;
