import { useState } from "react";
import useGetCommands from "../module/useGetCommands";

import style from "./CommandPlayers.module.scss";

import CommandsPlayer from "@/entity/CommandsPlayer/CommandsPlayer";
import { CustomTypography } from "@/shared/ui/CustomTypography";
import { useAuthContext } from "@/app/module/hooks/useAuthContext";
import { FloatButton } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AddPlayerForm from "@/features/AddPlayerForm/ui/AddPlayerForm";

const CommandPlayers = () => {
  const { players, setPlayers } = useGetCommands();
  const [open, setOpen] = useState(false);
  const { isAuth } = useAuthContext();

  return (
    <div className={style.cplayers}>
      <CustomTypography
        type="h2"
        className={style.cplayers__title}
      >
        Наша команда:
      </CustomTypography>
      <div className={style.cplayers__container}>
        {players.map((el) => (
          <CommandsPlayer
            key={el.id}
            player={el}
            setPlayer={setPlayers}
          />
        ))}
      </div>
      {isAuth && (
        <FloatButton
          icon={<PlusOutlined />}
          onClick={() => setOpen(true)}
        />
      )}
      <AddPlayerForm
        setPlayer={setPlayers}
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default CommandPlayers;
