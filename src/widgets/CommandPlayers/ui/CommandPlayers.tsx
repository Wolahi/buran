import useGetCommands from "../module/useGetCommands";

import style from "./CommandPlayers.module.scss";

import CommandsPlayer from "@/entity/CommandsPlayer/CommandsPlayer";
import { IActions } from "@/shared/config/interfaces/IActions";
import { IPlayerSimpleOutput } from "@/shared/config/interfaces/IPlayerSimpleOutput";
import { CustomTypography } from "@/shared/ui/CustomTypography";

interface CommandPlayersProps {
  player: IPlayerSimpleOutput;
  actions: IActions;
}

const CommandPlayers = () => {
  const { players } = useGetCommands();

  return (
    <div className={style.cplayers}>
      <CustomTypography type="h2" className={style.cplayers__title}>
        НАША КОМАНДА
      </CustomTypography>
      <div className={style.cplayers__container}>
        {players.map((el: CommandPlayersProps) => (
          <CommandsPlayer key={el.player.id} player={el.player} />
        ))}
      </div>
    </div>
  );
};

export default CommandPlayers;
