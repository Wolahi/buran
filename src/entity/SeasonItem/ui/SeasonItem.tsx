import { Link } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";

import style from "./SeasonItem.module.scss";

import { useAuthContext } from "@/app/module/hooks/useAuthContext.ts";
import useDeleteSeasons from "@/entity/SeasonItem/module/useDeleteSeasons.ts";
import { ISeasonOutput } from "@/shared/config/interfaces/ISeasonOutput.ts";

type SeasonItemProps = {
  title: string;
  link: string;
  setSeasons: any;
};

const SeasonItem = ({ title, link, setSeasons }: SeasonItemProps) => {
  const { isAuth } = useAuthContext();
  const { deleteSeason } = useDeleteSeasons();
  return (
    <div className={style.seasonWrap}>
      <Link to={link} className={style.seasonItem__title}>
        <div className={style.seasonItem}>Сезон {title} гг. </div>
      </Link>
      {isAuth && (
        <Button
          type="primary"
          danger
          className={style.btnDelete}
          onClick={() => {
            deleteSeason(title);
            setSeasons((prev: any) =>
              prev.filter((s: ISeasonOutput) => s.title !== title),
            );
          }}
        >
          <DeleteOutlined />
        </Button>
      )}
    </div>
  );
};

export default SeasonItem;
