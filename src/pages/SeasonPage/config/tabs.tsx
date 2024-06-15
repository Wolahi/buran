import { TabsProps } from "antd";

import { CustomTypography } from "@/shared/ui/CustomTypography";
import MatchList from "@/widgets/MatchList/ui/MatchList.tsx";
import NewsList from "@/widgets/NewsList/ui/NewsList.tsx";

export const items: TabsProps["items"] = [
  {
    key: "1",
    label: <CustomTypography type="textMs">Новости</CustomTypography>,
    children: <NewsList />,
  },
  {
    key: "2",
    label: <CustomTypography type="textMs">Топ Игроки</CustomTypography>,
    children: <CustomTypography type="title">Топ Игроки</CustomTypography>,
  },
  {
    key: "3",
    label: <CustomTypography type="textMs">Матчи</CustomTypography>,
    children: <MatchList />,
  },
];
