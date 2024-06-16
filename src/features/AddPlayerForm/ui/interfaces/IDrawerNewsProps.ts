import { DrawerProps } from "antd";

import { IPlayerSimpleOutput } from "@/shared/config/interfaces/IPlayerSimpleOutput";

export interface IDrawerPlayerProps extends DrawerProps {
  setPlayer: any;
  player: IPlayerSimpleOutput | null;
}
