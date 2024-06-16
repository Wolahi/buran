import { Controller, useForm } from "react-hook-form";
import { Button, DatePicker, Drawer } from "antd";
import dayjs from "dayjs";

import styles from "./AddSeasonForm.module.scss";

import useAddSeason from "@/features/AddSeasonForm/module/useAddSeason.ts";
import { IAddSeasonForm } from "@/features/AddSeasonForm/ui/interfaces/IAddSeasonForm.ts";
import { IDrawerSeasonProps } from "@/features/AddSeasonForm/ui/interfaces/IDrawerSeasonProps.ts";
import { ISeasonOutput } from "@/shared/config/interfaces/ISeasonOutput.ts";
import { CustomTypography } from "@/shared/ui/CustomTypography";

dayjs.locale("ru");

const AddSeasonForm = ({ open, onClose, setSeason }: IDrawerSeasonProps) => {
  const { control, handleSubmit } = useForm<IAddSeasonForm>();
  const { addSeason } = useAddSeason();

  const onSubmit = async (data: IAddSeasonForm) => {
    const tempData: IAddSeasonForm = {
      dateStart: dayjs(data.dateStart).format("YYYY-MM-DD"),
      dateEnd: dayjs(data.dateEnd).format("YYYY-MM-DD"),
    };

    const res = await addSeason(tempData);
    if (res.data) setSeason((prev: ISeasonOutput[]) => [...prev, res.data]);
    // @ts-ignore
    onClose();
  };
  return (
    <Drawer open={open} onClose={onClose}>
      <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
        <CustomTypography type="textM">Создание сезона</CustomTypography>
        <Controller
          control={control}
          name="dateStart"
          render={({ field }) => (
            <div className={styles.items}>
              <CustomTypography type="subtitle">Начало</CustomTypography>
              <DatePicker {...field} />
            </div>
          )}
        />

        <Controller
          control={control}
          name="dateEnd"
          render={({ field }) => (
            <div className={styles.items}>
              <CustomTypography type="subtitle">Конец</CustomTypography>
              <DatePicker {...field} />
            </div>
          )}
        />

        <Button type="primary" htmlType="submit">
          Создать
        </Button>
      </form>
    </Drawer>
  );
};

export default AddSeasonForm;
