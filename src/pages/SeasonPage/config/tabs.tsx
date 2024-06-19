import { TabsProps } from "antd";

import { CustomTypography } from "@/shared/ui/CustomTypography";
import MatchList from "@/widgets/MatchList/ui/MatchList.tsx";
import NewsList from "@/widgets/NewsList/ui/NewsList.tsx";
import PlayersStats from "@/widgets/PlayersStats/ui/PlayerStats.tsx";
import Stats from "@/widgets/Stats/ui/stats";

export const items: TabsProps["items"] = [
  {
    key: "1",
    label: <CustomTypography type="textMs">Новости</CustomTypography>,
    children: <NewsList />,
  },
  {
    key: "2",
    label: <CustomTypography type="textMs">Статистика сезона</CustomTypography>,
    children: <Stats />,
  },
  {
    key: "3",
    label: <CustomTypography type="textMs">Матчи</CustomTypography>,
    children: <MatchList />,
  },
  {
    key: "4",
    label: <CustomTypography type="textMs">Игроки</CustomTypography>,
    children: <PlayersStats />,
  },
];
