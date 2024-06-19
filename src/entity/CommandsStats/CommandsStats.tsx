import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { FloatButton, Table, type TableProps } from "antd";

import { CommandsStatsProps } from "./interfaces/CommandsStatsProps";

import styles from "./CommandsStats.module.scss";

import { useAuthContext } from "@/app/module/hooks/useAuthContext";
import AddStatsActivitesForm from "@/features/AddStatActivitesForm/ui/AddStatActivitesForm";

const columns: TableProps["columns"] = [
  {
    key: "n",
    title: "Номер",
    dataIndex: "n",
    render: (val) => <span className={styles.CommandsStat__text}>{val}</span>,
  },
  {
    key: "i",
    title: "Игры",
    dataIndex: "i",
    render: (val) => <span className={styles.CommandsStat__text}>{val}</span>,
  },
  {
    key: "v",
    title: "Выигранные",
    dataIndex: "v",
    render: (val) => <span className={styles.CommandsStat__text}>{val}</span>,
  },
  {
    key: "vo",
    title: "Выигранные овертаймы",
    dataIndex: "vo",
    render: (val) => <span className={styles.CommandsStat__text}>{val}</span>,
  },
  {
    key: "vb",
    title: "Выигранные буллиты",
    dataIndex: "vb",
    render: (val) => <span className={styles.CommandsStat__text}>{val}</span>,
  },
  {
    key: "pb",
    title: "Проигранные буллиты",
    dataIndex: "pb",
    render: (val) => <span className={styles.CommandsStat__text}>{val}</span>,
  },
  {
    key: "po",
    title: "Проигранные овертаймы",
    dataIndex: "po",
    render: (val) => <span className={styles.CommandsStat__text}>{val}</span>,
  },
  {
    key: "p",
    title: "Проигранные",
    dataIndex: "p",
    render: (val) => <span className={styles.CommandsStat__text}>{val}</span>,
  },
  {
    key: "sh",
    title: "Шайбы",
    dataIndex: "sh",
    render: (val) => <span className={styles.CommandsStat__text}>{val}</span>,
  },
  {
    key: "p",
    title: "O",
    dataIndex: "o",
    render: (val) => <span className={styles.CommandsStat__text}>{val}</span>,
  },
  {
    key: "pero",
    title: "% очков",
    dataIndex: "pero",
    render: (val) => <span className={styles.CommandsStat__text}>{val}</span>,
  },
];

const CommandsStats = ({
  commandsStats,
  setCommandsStats,
}: CommandsStatsProps) => {
  const { isAuth } = useAuthContext();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Table
        columns={columns}
        dataSource={[commandsStats]}
        pagination={false}
        bordered
        scroll={{ x: 820 }}
        className={styles.CommandsStat}
      />
      {isAuth && (
        <FloatButton icon={<PlusOutlined />} onClick={() => setOpen(true)} />
      )}
      <AddStatsActivitesForm
        setCommandsStats={setCommandsStats}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default CommandsStats;
