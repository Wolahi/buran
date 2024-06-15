import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Drawer, Image, Input, Upload } from "antd";
import { RcFile } from "antd/es/upload";
import TextArea from "antd/lib/input/TextArea";
import dayjs from "dayjs";

import styles from "./AddNewsForm.module.scss";

import useAddNews from "@/features/AddNewsForm/module/useAddSeason.ts";
import { IAddNewsForm } from "@/features/AddNewsForm/ui/interfaces/IAddNewsForm.ts";
import { IAddNewsInput } from "@/features/AddNewsForm/ui/interfaces/IAddNewsInput.ts";
import { IDrawerNewsProps } from "@/features/AddNewsForm/ui/interfaces/IDrawerNewsProps.ts";
import { INews } from "@/shared/config/interfaces/INews.ts";
import useImageStorage from "@/shared/module/useImageStorage.ts";
import { CustomTypography } from "@/shared/ui/CustomTypography";

dayjs.locale("ru");

const AddNewsForm = ({ open, onClose, setNews }: IDrawerNewsProps) => {
  const { control, handleSubmit, reset } = useForm<IAddNewsForm>();
  const { deleteImage, setImageInStorage, image, loading, setImage } =
    useImageStorage();
  const { addNews } = useAddNews();
  const { id } = useParams();

  const onSubmit = async (data: IAddNewsForm) => {
    if (image && id) {
      const tempData: IAddNewsInput = {
        ...data,
        date: dayjs(data.date).format("YYYY-MM-DD"),
        image: image.uuid,
      };
      const res = await addNews(tempData, id);
      setNews((prev: INews[]) => [...prev, res.data]);
      setImage(null);
      reset();
      // @ts-ignore
      onClose();
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
    <Drawer open={open} onClose={onClose}>
      <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
        <CustomTypography type="textM">Создание новости</CustomTypography>
        <div className={styles.items}>
          <CustomTypography type="subtitle">Фото</CustomTypography>
          {!image ? (
            <Upload
              listType="picture-card"
              showUploadList={false}
              action={handleChangeImage}
            >
              <button style={{ border: 0, background: "none" }} type="button">
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
              <Image src={image.url} alt="fd" preview={false} />
            </Button>
          )}
        </div>
        <Controller
          control={control}
          name="title"
          render={({ field }) => (
            <div className={styles.items}>
              <CustomTypography type="subtitle">Заголовок</CustomTypography>
              <Input {...field} />
            </div>
          )}
        />

        <Controller
          control={control}
          name="text"
          render={({ field }) => (
            <div className={styles.items}>
              <CustomTypography type="subtitle">Описание</CustomTypography>
              <TextArea {...field} />
            </div>
          )}
        />

        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <div className={styles.items}>
              <CustomTypography type="subtitle">Дата</CustomTypography>
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

export default AddNewsForm;
