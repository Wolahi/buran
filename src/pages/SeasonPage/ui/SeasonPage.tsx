import { useMemo } from "react";
import { useParams } from "react-router";
import { Tabs } from "antd";
import classNames from "classnames";

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
    <section className={classNames(styles.root, "inner")}>
      <div className={styles.contentSeason}>
        <CustomTypography type="title">{seasonTitle}</CustomTypography>
        <Tabs centered defaultActiveKey="1" items={items} />
      </div>
    </section>
  );
};

export default SeasonPage;
