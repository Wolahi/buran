import { EMatchAction } from "@/shared/config/interfaces/EMatchAction";

export interface IAddMatchActivitiesForm {
  playerId: number;
  enemy: boolean;
  minutes: number;
  action: EMatchAction;
}
