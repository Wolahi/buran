import { TabsProps } from "antd";

import { CustomTypography } from "@/shared/ui/CustomTypography";

export const items: TabsProps["items"] = [
  {
    key: "1",
    label: <CustomTypography type="subtitle">Новости</CustomTypography>,
    children: <CustomTypography type="title">Новости</CustomTypography>,
  },
  {
    key: "2",
    label: <CustomTypography type="subtitle">Топ Игроки</CustomTypography>,
    children: <CustomTypography type="title">Топ Игроки</CustomTypography>,
  },
  {
    key: "3",
    label: <CustomTypography type="subtitle">Матчи</CustomTypography>,
    children: <CustomTypography type="title">Матчи</CustomTypography>,
  },
  {
    key: "4",
    label: (
      <CustomTypography type="subtitle">Тренерская работа</CustomTypography>
    ),
    children: (
      <CustomTypography type="title">Тренерская работа</CustomTypography>
    ),
  },
  {
    key: "5",
    label: (
      <CustomTypography type="subtitle">
        Развлеткательная программа
      </CustomTypography>
    ),
    children: (
      <CustomTypography type="title">
        Развлеткательная программа
      </CustomTypography>
    ),
  },
];
