import { IMatchInfo } from "@/shared/config/interfaces/IMatchInfo.ts";
import { Dispatch, SetStateAction } from "react";

export interface IMatchProps {
  match: IMatchInfo;
  setMatch: Dispatch<SetStateAction<IMatchInfo[]>>;
}
