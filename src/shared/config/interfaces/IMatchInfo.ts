import { IMatchResult } from "@/shared/config/interfaces/IMatchResult.ts";
import { IPlayerSimpleOutput } from "@/shared/config/interfaces/IPlayerSimpleOutput.ts";

export interface IMatchInfo {
  id: number;
  enemy: string;
  dateStart: string;
  team: IPlayerSimpleOutput[];
  title: string;
  actions: IMatchResult[];
}
