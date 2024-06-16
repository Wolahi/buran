import styles from "./CommandsStats.module.scss";

import { Table, type TableProps } from "antd";
import { CommandsStatsProps } from "./interfaces/CommandsStatsProps";

const CommandsStats = ({ actions }: CommandsStatsProps) => {
  const columns: TableProps["columns"] = [
    {
      title: "Голы",
      dataIndex: "GOAL",
      render: (val) => <span className={styles.CommandsStat__text}>{val}</span>,
    },
    {
      title: "Замены",
      dataIndex: "SWAP",
      render: (val) => <span className={styles.CommandsStat__text}>{val}</span>,
    },
    {
      title: "Штрафы",
      dataIndex: "BAD",
      render: (val) => <span className={styles.CommandsStat__text}>{val}</span>,
    },
    {
      title: "Промахи",
      dataIndex: "MISS",
      render: (val) => <span className={styles.CommandsStat__text}>{val}</span>,
    },
    {
      title: "Защита",
      dataIndex: "FINE",
      render: (val) => <span className={styles.CommandsStat__text}>{val}</span>,
    },
    {
      title: "Перехват",
      dataIndex: "ENTRY",
      render: (val) => <span className={styles.CommandsStat__text}>{val}</span>,
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={[actions]}
      pagination={false}
      bordered
      scroll={{ x: 820 }}
      className={styles.CommandsStat}
    />
  );
};

export default CommandsStats;
