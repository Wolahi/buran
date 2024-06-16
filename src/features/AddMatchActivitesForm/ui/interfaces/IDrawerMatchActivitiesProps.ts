import { IMatchInfo } from "@/shared/config/interfaces/IMatchInfo";
import { DrawerProps } from "antd";

export interface IDrawerMatchActivitiesProps extends DrawerProps {
  setMatch: any;
  match: IMatchInfo;
}
