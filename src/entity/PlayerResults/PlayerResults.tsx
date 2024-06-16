import { CustomTypography } from "@/shared/ui/CustomTypography";
import styles from "./PlayerResults.module.scss";

import { PlayerResultsProps } from "./interfaces/PlayerResultsProps";
import { translateRolePlayer } from "@/shared/config/translateRoleTeam";
import { Link } from "react-router-dom";
import { Table, type TableProps } from "antd";
import { EPlayerType } from "@/shared/config/interfaces/EPlayerType";

const PlayerResults = ({ player, actions }: PlayerResultsProps) => {
  const columns: TableProps["columns"] = [
    {
      title: "Голы",
      dataIndex: "GOAL",
    },
    {
      title: "Замены",
      dataIndex: "SWAP",
    },
    {
      title: "Штрафы",
      dataIndex: "BAD",
    },
    {
      title: "Промахи",
      dataIndex: "MISS",
    },
    {
      title: "Защита",
      dataIndex: "FINE",
    },
    {
      title: "Перехват",
      dataIndex: "ENTRY",
    },
  ];

  return (
    <Link
      to={`/commands/player/${player?.id}`}
      className={styles.PlayerResults}
    >
      <div className={styles.PlayerResults__head}>
        <div className={styles.PlayerResults__image}>
          <img
            src={player?.url}
            alt="player"
          />
        </div>
        <div className={styles.PlayerResults__content}>
          <CustomTypography
            type="textMs"
            className={styles.PlayerResults__name}
          >
            {player?.name}
          </CustomTypography>
          <div className={styles.PlayerResults__amplua}>
            <CustomTypography
              type="textMs"
              className={styles.PlayerResults__number}
            >
              {player?.number}
            </CustomTypography>
            <CustomTypography
              type="textMs"
              className={styles.PlayerResults__type}
            >
              {translateRolePlayer[player?.type as EPlayerType]}
            </CustomTypography>
          </div>
          <Table
            columns={columns || []}
            dataSource={[actions]}
            pagination={false}
            bordered
            scroll={{ x: 768 }}
            className={styles.PlayerResults__stats}
          />
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={[actions]}
        pagination={false}
        bordered
        scroll={{ x: 820 }}
        className={styles.PlayerResults__statsTablet}
      />
    </Link>
  );
};

export default PlayerResults;
