import { IAddPlayerInput } from "../ui/interfaces/IAddNewsInput";
import { IPlayerSimpleOutput } from "@/shared/config/interfaces/IPlayerSimpleOutput";
import { IAddPlayerForm } from "../ui/interfaces/IAddPlayerForm";
import { IStorageImageOutput } from "@/shared/config/interfaces/IStorageImageOutput";
import dayjs from "dayjs";
import useAddPlayer from "./useAddPlayer";

const useSubmit = (
  image: IStorageImageOutput | null,
  setPlayer: any,
  setImage: any,
  reset: any
) => {
  const { addPlayer, editPlayer } = useAddPlayer();

  const onSubmitAddPlayer = async (data: IAddPlayerForm) => {
    if (image && image?.uuid) {
      const tempData: IAddPlayerInput = {
        ...data,
        birthDate: dayjs(data.birthDate).format("YYYY-MM-DD"),
        number: +data.number,
        photo: image.uuid,
      };
      const res = await addPlayer(tempData);
      setPlayer((prev: IPlayerSimpleOutput[]) => [...prev, res.data]);
      setImage(null);
      reset();
      // @ts-ignore
      onClose();
    }
  };

  const onSubmitEditPlayer = async (data: IAddPlayerForm, id: number) => {
    if (image && image.uuid) {
      const tempData: IAddPlayerInput = {
        ...data,
        birthDate: dayjs(data.birthDate).format("YYYY-MM-DD"),
        number: +data.number,
        photo: image.uuid,
      };
      const res = await editPlayer(id, tempData);
      setPlayer((prev: IPlayerSimpleOutput[]) => [
        ...prev.filter((rep) => rep.id !== res.data.id),
        res.data,
      ]);
      setImage(null);
      reset();
      // @ts-ignore
      onClose();
    }
  };
  return { onSubmitAddPlayer, onSubmitEditPlayer };
};

export default useSubmit;
