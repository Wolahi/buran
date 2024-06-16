import CommandsPlayer from "@/entity/CommandsPlayer/CommandsPlayer";
import style from "./CommandPlayers.module.scss";
import useGetCommands from "../module/useGetCommands";
import { IPlayerSimpleOutput } from "@/shared/config/interfaces/IPlayerSimpleOutput";
import { IActions } from "@/shared/config/interfaces/IActions";

interface CommandPlayersProps {
  player: IPlayerSimpleOutput;
  actions: IActions;
}

const CommandPlayers = () => {
  const { players } = useGetCommands();

  return (
    <div className={style.cpage__items}>
      {players.map((el: CommandPlayersProps) => {
        return (
          <CommandsPlayer
            key={el.player.id}
            player={el.player}
          />
        );
      })}
    </div>
  );
};

export default CommandPlayers;
