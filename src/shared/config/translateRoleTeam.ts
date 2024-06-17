import { EMatchAction } from "@/shared/config/interfaces/EMatchAction.ts";
import { EPlayerType } from "@/shared/config/interfaces/EPlayerType.ts";

export const translateAction: Record<EMatchAction, string> = {
  [EMatchAction.Fine]: "Защита",
  [EMatchAction.Goal]: "Гол",
  [EMatchAction.Swap]: "Обмен",
  [EMatchAction.Entry]: "Вход",
  [EMatchAction.Miss]: "Промах",
  [EMatchAction.Bad]: "Штраф",
};

export const translateRolePlayer: Record<EPlayerType, string> = {
  [EPlayerType.DEFENDER]: "ЗАЩИТНИК",
  [EPlayerType.UNIVERSAL]: "УНЕВЕРСАЛ",
  [EPlayerType.CAPTAIN]: "КАПТИАН",
  [EPlayerType.FORWARD]: "НАПАДАЮЩИЙ",
  [EPlayerType.GOALKEEPER]: "ВРАТАРЬ",
};
