import { IPlayerSimpleOutput } from "@/shared/config/interfaces/IPlayerSimpleOutput";
import { DrawerProps } from "antd";

export interface IDrawerPlayerProps extends DrawerProps {
  setPlayer: any;
  player?: IPlayerSimpleOutput;
}
