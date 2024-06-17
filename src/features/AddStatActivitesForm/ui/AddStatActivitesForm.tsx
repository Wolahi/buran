import { Controller, useForm } from "react-hook-form";
import { Button, Drawer, Input } from "antd";
import dayjs from "dayjs";

import styles from "./AddStatActivitesForm.module.scss";

import { CustomTypography } from "@/shared/ui/CustomTypography";
import { IDrawerStatsActivitiesProps } from "./interfaces/IDrawerStatsActivitiesProps";
import { IAddStatsActivitiesForm } from "./interfaces/IAddStatsActivitiesForm";
import { IAddStatsActivitiesInput } from "./interfaces/IAddStatsActivitiesInput";
import useAddsStatsActivities from "../module/useAddsStatsActivities";

dayjs.locale("ru");

const AddStatsActivitesForm = ({
  open,
  onClose,
  setCommandsStats,
}: IDrawerStatsActivitiesProps) => {
  const { control, handleSubmit, reset } = useForm<IAddStatsActivitiesForm>();
  const { addStatsActivities } = useAddsStatsActivities();

  const onSubmit = async (data: IAddStatsActivitiesForm) => {
    const tempData: IAddStatsActivitiesInput = {
      ...data,
    };
    const res = await addStatsActivities(tempData);
    setCommandsStats(res.data);
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
        <CustomTypography type="textM">Обновление статистики</CustomTypography>
        <Controller
          control={control}
          name="n"
          render={({ field }) => (
            <div className={styles.items}>
              <CustomTypography type="subtitle">
                Номер в турнирной таблице
              </CustomTypography>
              <Input
                type="number"
                {...field}
              />
            </div>
          )}
        />
        <Controller
          control={control}
          name="i"
          render={({ field }) => (
            <div className={styles.items}>
              <CustomTypography type="subtitle">Кол-во игр</CustomTypography>
              <Input
                type="number"
                {...field}
              />
            </div>
          )}
        />
        <Controller
          control={control}
          name="v"
          render={({ field }) => (
            <div className={styles.items}>
              <CustomTypography type="subtitle">
                Кол-во выиграннных игр
              </CustomTypography>
              <Input
                type="number"
                {...field}
              />
            </div>
          )}
        />
        <Controller
          control={control}
          name="vo"
          render={({ field }) => (
            <div className={styles.items}>
              <CustomTypography type="subtitle">
                Кол-во выигранных овертаймов
              </CustomTypography>
              <Input
                type="number"
                {...field}
              />
            </div>
          )}
        />
        <Controller
          control={control}
          name="vb"
          render={({ field }) => (
            <div className={styles.items}>
              <CustomTypography type="subtitle">
                Кол-во выигранныхм буллитов
              </CustomTypography>
              <Input
                type="number"
                {...field}
              />
            </div>
          )}
        />
        <Controller
          control={control}
          name="pb"
          render={({ field }) => (
            <div className={styles.items}>
              <CustomTypography type="subtitle">
                Кол-во проигранныхъ буллитов
              </CustomTypography>
              <Input
                type="number"
                {...field}
              />
            </div>
          )}
        />
        <Controller
          control={control}
          name="po"
          render={({ field }) => (
            <div className={styles.items}>
              <CustomTypography type="subtitle">
                Кол-во проигранных овертаймов
              </CustomTypography>
              <Input
                type="number"
                {...field}
              />
            </div>
          )}
        />
        <Controller
          control={control}
          name="p"
          render={({ field }) => (
            <div className={styles.items}>
              <CustomTypography type="subtitle">
                Кол-во проигранных матчей
              </CustomTypography>
              <Input
                type="number"
                {...field}
              />
            </div>
          )}
        />
        <Controller
          control={control}
          name="sh"
          render={({ field }) => (
            <div className={styles.items}>
              <CustomTypography type="subtitle">Шайбы</CustomTypography>
              <Input {...field} />
            </div>
          )}
        />
        <Controller
          control={control}
          name="o"
          render={({ field }) => (
            <div className={styles.items}>
              <CustomTypography type="subtitle">O</CustomTypography>
              <Input
                type="number"
                {...field}
              />
            </div>
          )}
        />
        <Controller
          control={control}
          name="pero"
          render={({ field }) => (
            <div className={styles.items}>
              <CustomTypography type="subtitle">% очков</CustomTypography>
              <Input
                type="number"
                {...field}
              />
            </div>
          )}
        />
        <Button
          type="primary"
          htmlType="submit"
        >
          Обновить
        </Button>
      </form>
    </Drawer>
  );
};

export default AddStatsActivitesForm;
