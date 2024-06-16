import { Controller, useForm } from "react-hook-form";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Drawer, Image, Input, Select, Upload } from "antd";
import { RcFile } from "antd/es/upload";
import TextArea from "antd/lib/input/TextArea";
import dayjs from "dayjs";

import styles from "./AddPlayerForm.module.scss";

import useImageStorage from "@/shared/module/useImageStorage.ts";
import { CustomTypography } from "@/shared/ui/CustomTypography";
import { IAddPlayerForm } from "./interfaces/IAddPlayerForm";
import { IDrawerPlayerProps } from "./interfaces/IDrawerNewsProps";
import { translateRolePlayer } from "@/shared/config/translateRoleTeam";
import { EPlayerType } from "@/shared/config/interfaces/EPlayerType";
import { useEffect } from "react";
import useSubmit from "../module/useSubmit";
import useGetPlayerById from "@/widgets/PlayerDetail/module/useGetPlayerById";

dayjs.locale("ru");

const AddPlayerForm = ({
  open,
  onClose,
  setPlayer,
  player,
}: IDrawerPlayerProps) => {
  const { control, handleSubmit, reset } = useForm<IAddPlayerForm>();

  const { deleteImage, setImageInStorage, image, loading, setImage } =
    useImageStorage();
  const { player: playerById } = useGetPlayerById((player as any)?.id);
  const { onSubmitAddPlayer, onSubmitEditPlayer } = useSubmit(
    image,
    setPlayer,
    setImage,
    reset
  );

  useEffect(() => {
    if (player && playerById) {
      reset({
        name: playerById?.name,
        number: playerById?.number,
        biography: playerById?.biography,
        type: playerById?.type,
        birthDate: playerById?.birthDate,
      });
      setImage({ url: player.url, uuid: player.img });
    }
  }, [player, reset, playerById]);

  const onSubmit = async (data: IAddPlayerForm) => {
    if (player) {
      await onSubmitEditPlayer(data, player.id);
    } else {
      await onSubmitAddPlayer(data);
    }
  };

  const handleChangeImage = async (info: RcFile) => {
    if (info) {
      await setImageInStorage(info);
      return "все ок";
    }

    return "Не оч";
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
        <CustomTypography type="textM">
          {player ? "Редактирование игрока" : "Добавление игрока"}
        </CustomTypography>
        <div className={styles.items}>
          <CustomTypography type="subtitle">Фото</CustomTypography>
          {!image ? (
            <Upload
              listType="picture-card"
              showUploadList={false}
              action={handleChangeImage}
            >
              <button
                style={{ border: 0, background: "none" }}
                type="button"
              >
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div style={{ marginTop: 8 }}>Загрузить</div>
              </button>
            </Upload>
          ) : (
            <Button
              danger
              className={styles.imagePreview}
              onClick={deleteImage}
            >
              <Image
                src={image.url}
                alt="fd"
                preview={false}
              />
            </Button>
          )}
        </div>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <div className={styles.items}>
              <CustomTypography type="subtitle">ФИО</CustomTypography>
              <Input {...field} />
            </div>
          )}
        />

        <Controller
          control={control}
          name="type"
          render={({ field }) => (
            <div className={styles.items}>
              <CustomTypography type="subtitle">Амплуа</CustomTypography>
              <Select
                options={Object.keys(translateRolePlayer).map((el) => ({
                  value: el,
                  label: translateRolePlayer[el as EPlayerType],
                }))}
                {...field}
              />
            </div>
          )}
        />

        <Controller
          control={control}
          name="number"
          render={({ field }) => (
            <div className={styles.items}>
              <CustomTypography type="subtitle">
                Игровой номер игрока
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
          name="biography"
          render={({ field }) => (
            <div className={styles.items}>
              <CustomTypography type="subtitle">Биография</CustomTypography>
              <TextArea {...field} />
            </div>
          )}
        />

        <Controller
          control={control}
          name="birthDate"
          render={({ field }) => (
            <div className={styles.items}>
              <CustomTypography type="subtitle">Дата рождения</CustomTypography>
              <DatePicker
                {...field}
                value={dayjs(field.value)}
              />
            </div>
          )}
        />

        <Button
          type="primary"
          htmlType="submit"
        >
          {player ? "Обноваить" : "Создать"}
        </Button>
      </form>
    </Drawer>
  );
};

export default AddPlayerForm;
