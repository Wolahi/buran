import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";

import useGetCommands from "../module/useGetCommands";

import style from "./CommandPlayers.module.scss";

import { useAuthContext } from "@/app/module/hooks/useAuthContext";
import CommandsPlayer from "@/entity/CommandsPlayer/CommandsPlayer";
import AddPlayerForm from "@/features/AddPlayerForm/ui/AddPlayerForm";
import { CustomTypography } from "@/shared/ui/CustomTypography";

const CommandPlayers = () => {
  const { players, setPlayers } = useGetCommands();
  const [open, setOpen] = useState(false);
  const { isAuth } = useAuthContext();

  return (
    <div className={style.cplayers}>
      <CustomTypography type="h2" className={style.cplayers__title}>
        Наша команда:
      </CustomTypography>
      <div className={style.cplayers__container}>
        {players.map((el) => (
          <CommandsPlayer key={el.id} player={el} setPlayer={setPlayers} />
        ))}
      </div>
      {isAuth && (
        <FloatButton icon={<PlusOutlined />} onClick={() => setOpen(true)} />
      )}
      <AddPlayerForm
        player={null}
        setPlayer={setPlayers}
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default CommandPlayers;
