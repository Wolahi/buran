import { Controller, useForm } from "react-hook-form";
import { Button, DatePicker, Drawer, Input, Select, Switch } from "antd";
import dayjs from "dayjs";

import styles from "./AddMatchActivitesForm.module.scss";

import { CustomTypography } from "@/shared/ui/CustomTypography";
import { IDrawerMatchActivitiesProps } from "./interfaces/IDrawerMatchActivitiesProps";
import { IAddMatchActivitiesForm } from "./interfaces/IAddMatchActivitiesForm";
import { IAddMatchActivitiesInput } from "./interfaces/IAddMatchActivitiesInput";
import { IMatchResult } from "@/shared/config/interfaces/IMatchResult";
import useAddMatchActivities from "../module/useAddMatchActivities";
import { useState } from "react";
import { EMatchAction } from "@/shared/config/interfaces/EMatchAction";
import { translateAction } from "@/shared/config/translateRoleTeam";
import useGetCommands from "@/widgets/CommandPlayers/module/useGetCommands";

dayjs.locale("ru");

const AddMatchActivitesForm = ({
  open,
  onClose,
  match,
  setMatch,
}: IDrawerMatchActivitiesProps) => {
  const { control, handleSubmit, reset } = useForm<IAddMatchActivitiesForm>();
  const { addMatchActivities } = useAddMatchActivities(match.id);
  const [isBuran, setIsBuran] = useState(true);

  const { players } = useGetCommands();
  const onSubmit = async (data: IAddMatchActivitiesForm) => {
    const tempData: IAddMatchActivitiesInput = {
      ...data,
    };
    const res = await addMatchActivities(tempData);
    setMatch((prev: IMatchResult[]) => [
      ...prev.filter((match) => match.id !== res.data.id),
      res.data,
    ]);
    reset();
    // @ts-ignore
    onClose();
  };

  return (
    <Drawer
      open={open}
      onClose={onClose}
    >
      <form
        className={styles.root}
        onSubmit={handleSubmit(onSubmit)}
      >
        <CustomTypography type="textM">Создание момента матча</CustomTypography>
        <Controller
          control={control}
          name="enemy"
          render={({ field }) => (
            <div className={styles.items}>
              <CustomTypography
                type="subtitle"
                style={{ textAlign: "center" }}
              >
                Укажите команду
              </CustomTypography>
              <CustomTypography
                type="subtitle"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div>Буран</div>
                <div>{match.enemy}</div>
              </CustomTypography>
              <Switch
                {...field}
                onChange={() => setIsBuran(!isBuran)}
              />
            </div>
          )}
        />

        <Controller
          control={control}
          name="minutes"
          render={({ field }) => (
            <div className={styles.items}>
              <CustomTypography type="subtitle">
                Укажите минуту события
              </CustomTypography>
              <Input
                type="number"
                {...field}
              />
            </div>
          )}
        />
        {isBuran && (
          <Controller
            control={control}
            name="playerId"
            render={({ field }) => (
              <div className={styles.items}>
                <CustomTypography type="subtitle">
                  Укажите игрока
                </CustomTypography>
                <Select
                  options={players.map((el) => ({
                    value: el.id,
                    label: el.name,
                  }))}
                  {...field}
                />
              </div>
            )}
          />
        )}
        <Controller
          control={control}
          name="action"
          render={({ field }) => (
            <div className={styles.items}>
              <CustomTypography type="subtitle">
                Укажите тип события
              </CustomTypography>
              <Select
                options={Object.keys(translateAction).map((el) => ({
                  value: el,
                  label: translateAction[el as EMatchAction],
                }))}
                {...field}
              />
            </div>
          )}
        />

        <Button
          type="primary"
          htmlType="submit"
        >
          Добавить
        </Button>
      </form>
    </Drawer>
  );
};

export default AddMatchActivitesForm;
