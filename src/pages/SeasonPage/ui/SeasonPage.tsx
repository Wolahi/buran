import { useMemo } from "react";
import { useParams } from "react-router";
import { Tabs } from "antd";

import styles from "./Season.module.scss";

import { items } from "@/pages/SeasonPage/config/tabs";
import { seasonMock } from "@/shared/config/seasonMock.ts";
import { CustomTypography } from "@/shared/ui/CustomTypography";

const SeasonPage = () => {
  const { id } = useParams();
  const seasonTitle = useMemo(
    () => seasonMock.find((season) => season?.id === id)?.title,
    [id],
  );
  return (
    <section className={styles.root}>
      <div className={styles.headerSeason}>
        <CustomTypography type="title">{seasonTitle}</CustomTypography>
      </div>
      <div className={styles.contentSeason}>
        <Tabs centered defaultActiveKey="1" items={items} />
      </div>
    </section>
  );
};

export default SeasonPage;
