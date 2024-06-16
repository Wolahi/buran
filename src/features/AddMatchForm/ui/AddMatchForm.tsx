import { Controller, useForm } from "react-hook-form";
import { Button, DatePicker, Drawer, Input, Select } from "antd";
import dayjs from "dayjs";

import styles from "./AddMatchForm.module.scss";

import { CustomTypography } from "@/shared/ui/CustomTypography";
import { IDrawerMatchProps } from "./interfaces/IDrawerMatchProps";
import { IAddMatchForm } from "./interfaces/IAddMatchForm";
import useAddMatch from "../module/useMatchSeason";
import { IMatchInfo } from "@/shared/config/interfaces/IMatchInfo";
import { IAddMatchInput } from "./interfaces/IAddMatchInput";
import useGetCommands from "@/widgets/CommandPlayers/module/useGetCommands";
import { useParams } from "react-router";

dayjs.locale("ru");

const AddMatchForm = ({ open, onClose, setMatch }: IDrawerMatchProps) => {
  const { control, handleSubmit, reset } = useForm<IAddMatchForm>();
  const { id } = useParams();
  const { addMatch } = useAddMatch();
  const { players } = useGetCommands();
  const onSubmit = async (data: IAddMatchForm) => {
    const tempData: IAddMatchInput = {
      ...data,
      dateTimeStart: dayjs(data.dateTimeStart).format("YYYY-MM-DDTHH:mm:ss"),
      seasonTitle: id,
    };
    const res = await addMatch(tempData);

    setMatch((prev: IMatchInfo[]) => [...prev, res.data]);
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
        <CustomTypography type="textM">Создание матча</CustomTypography>
        <Controller
          control={control}
          name="enemy"
          render={({ field }) => (
            <div className={styles.items}>
              <CustomTypography type="subtitle">
                Название вражеской команды
              </CustomTypography>
              <Input {...field} />
            </div>
          )}
        />

        <Controller
          control={control}
          name="team"
          render={({ field }) => (
            <div className={styles.items}>
              <CustomTypography type="subtitle">
                Игроки «Бурана»
              </CustomTypography>
              <Select
                mode="multiple"
                maxTagCount={6}
                options={players.map((el) => ({
                  value: el.id,
                  label: el.name,
                }))}
                {...field}
              />
            </div>
          )}
        />

        <Controller
          control={control}
          name="dateTimeStart"
          render={({ field }) => (
            <div className={styles.items}>
              <CustomTypography type="subtitle">Дата матча</CustomTypography>
              <DatePicker
                showTime
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

export default AddMatchForm;
