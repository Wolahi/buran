import { IPlayerSimpleOutput } from "@/shared/config/interfaces/IPlayerSimpleOutput";
import { Dispatch, SetStateAction } from "react";

export interface CommandsPlayerProps {
  player: IPlayerSimpleOutput;
  setPlayer: Dispatch<SetStateAction<IPlayerSimpleOutput[]>>;
}
