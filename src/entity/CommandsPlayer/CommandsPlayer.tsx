import { useState } from "react";
import { Link } from "react-router-dom";

import { CommandsPlayerProps } from "./interfaces/CommandsProps";
import useDeletePlayer from "./module/useDeletePlayer";

import styles from "./CommandsPlayer.module.scss";

import { useAuthContext } from "@/app/module/hooks/useAuthContext";
import Delete from "@/assets/delete.svg?react";
import Pencil from "@/assets/pencil.svg?react";
import AddPlayerForm from "@/features/AddPlayerForm/ui/AddPlayerForm";
import { IPlayerSimpleOutput } from "@/shared/config/interfaces/IPlayerSimpleOutput";
import { translateRolePlayer } from "@/shared/config/translateRoleTeam.ts";
import PlayerImage from "@/shared/ui/PlayerImage/ui/PlayerImage";

const CommandsPlayer = ({ player, setPlayer }: CommandsPlayerProps) => {
  const { isAuth } = useAuthContext();
  const [playerEdit, setPlayerEdit] = useState<IPlayerSimpleOutput | null>(
    null,
  );
  const { deletePlayer } = useDeletePlayer();
  const [open, setOpen] = useState(false);

  const onDelete = async () => {
    await deletePlayer(player.id);
    setPlayer((prev) => prev.filter((val) => player.id !== val.id));
  };

  return (
    <div className={styles.cardWrapper}>
      <Link to={`player/${player.id}`} className={styles.cpage__container}>
        <div className={styles.slider}>
          <PlayerImage player={player} />
        </div>
        <div className={styles.cpage__items}>
          <div className={styles.cpage__name}>{player?.name}</div>
          <div className={styles.cpage__number}>{player?.number}</div>
          <div className={styles.cpage__role}>
            {translateRolePlayer[player?.type]}
          </div>
        </div>
      </Link>
      {isAuth && (
        <>
          <button
            type="button"
            className={styles.cpage__editing}
            onClick={() => {
              setOpen(true);
              setPlayerEdit(player);
            }}
          >
            <Pencil />
          </button>
          <button
            type="button"
            className={styles.cpage__delete}
            onClick={onDelete}
          >
            <Delete />
          </button>
        </>
      )}
      <AddPlayerForm
        setPlayer={setPlayer}
        open={open}
        onClose={() => setOpen(false)}
        player={playerEdit}
      />
    </div>
  );
};

export default CommandsPlayer;
