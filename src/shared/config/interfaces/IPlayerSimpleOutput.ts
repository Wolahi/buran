import { EPlayerType } from "@/shared/config/interfaces/EPlayerType.ts";

export interface IPlayerSimpleOutput {
  id: number;
  name: string;
  number: number;
  type: EPlayerType;
  url: string;
}
