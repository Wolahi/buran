import useGetCommands from "../module/useGetCommands";

import style from "./CommandPlayers.module.scss";

import CommandsPlayer from "@/entity/CommandsPlayer/CommandsPlayer";
import { IPlayerSimpleOutput } from "@/shared/config/interfaces/IPlayerSimpleOutput";
import { CustomTypography } from "@/shared/ui/CustomTypography";

interface CommandPlayersProps {
  player: IPlayerSimpleOutput;
}

const CommandPlayers = () => {
  const { players } = useGetCommands();

  return (
    <div className={style.cplayers}>
      <CustomTypography
        type="h2"
        className={style.cplayers__title}
      >
        Наша команда:
      </CustomTypography>
      <div className={style.cplayers__container}>
        {players.map((el: CommandPlayersProps) => (
          <CommandsPlayer
            key={el.id}
            player={el}
          />
        ))}
      </div>
    </div>
  );
};

export default CommandPlayers;
