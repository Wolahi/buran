import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";

import style from "./SeasonList.module.scss";

import { useAuthContext } from "@/app/module/hooks/useAuthContext.ts";
import SeasonItem from "@/entity/SeasonItem/ui/SeasonItem.tsx";
import AddSeasonForm from "@/features/AddSeasonForm/ui/AddSeasonForm.tsx";

type SeasonListProps = {
  items: {
    id: string;
    title: string;
    link: string;
  }[];
  setSeasons: any;
};

const SeasonList = ({ items, setSeasons }: SeasonListProps) => {
  const [open, setOpen] = useState(false);
  const { isAuth } = useAuthContext();
  return (
    <div className={style.seasonList}>
      {items.map((el) => (
        <SeasonItem
          key={el.id}
          title={el.title}
          link={el.link}
          setSeasons={setSeasons}
        />
      ))}
      {isAuth && (
        <FloatButton
          className={style.float}
          icon={<PlusOutlined />}
          onClick={() => setOpen(true)}
        />
      )}
      <AddSeasonForm
        open={open}
        onClose={() => setOpen(false)}
        setSeason={setSeasons}
      />
    </div>
  );
};

export default SeasonList;
