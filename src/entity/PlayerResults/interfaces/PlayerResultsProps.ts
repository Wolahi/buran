import { IActions } from "@/shared/config/interfaces/IActions";
import { IPlayerSimpleOutput } from "@/shared/config/interfaces/IPlayerSimpleOutput";

export interface PlayerResultsProps {
  player: IPlayerSimpleOutput;
  actions: IActions;
}
