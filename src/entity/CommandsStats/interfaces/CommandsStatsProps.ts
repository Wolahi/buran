import { ICommandStats } from "@/shared/config/interfaces/ICommandStats";
import { Dispatch, SetStateAction } from "react";

export interface CommandsStatsProps {
  commandsStats?: ICommandStats;
  setCommandsStats: Dispatch<SetStateAction<ICommandStats | undefined>>;
}
