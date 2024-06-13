import { EMatchAction } from "@/shared/config/interfaces/EMatchAction.ts";

export interface IMatchResult {
  playerId?: number;
  enemy: boolean;
  minutes: number;
  action: EMatchAction;
}
