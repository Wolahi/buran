import { useMemo, useState } from "react";
import { List, Steps } from "antd";
import { StepsProps } from "antd/lib";
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./Match.module.scss";

import "swiper/css";
import "swiper/css/pagination";
import { IMatchProps } from "@/entity/Match/ui/interfaces/IMatchProps.ts";
import { translateAction } from "@/shared/config/translateRoleTeam.ts";
import { CustomTypography } from "@/shared/ui/CustomTypography";
import PlayerImage from "@/shared/ui/PlayerImage/ui/PlayerImage.tsx";
import { useAuthContext } from "@/app/module/hooks/useAuthContext";
import Delete from "@/assets/delete.svg?react";
import Plus from "@/assets/plus.svg?react";
import useDeleteMatch from "../module/useDeleteMatch";
import AddMatchActivitesForm from "@/features/AddMatchActivitesForm/ui/AddMatchActivitesForm";

const Match = ({ match, setMatch }: IMatchProps) => {
  const { isAuth } = useAuthContext();
  const { deleteMatch } = useDeleteMatch();
  const [open, setOpen] = useState(false);

  const onDelete = async () => {
    await deleteMatch(match.id);
    setMatch((prev) => prev.filter((val) => match.id !== val.id));
  };

  const itemsAction: StepsProps[] = useMemo(
    () =>
      match.actions.map((action) =>
        action.enemy
          ? {
              status: "error",
              title: (
                <CustomTypography type="textMs">
                  {translateAction[action.action]}
                </CustomTypography>
              ),
              description: (
                <CustomTypography type="subtitle">{`Минута ${action.minutes}`}</CustomTypography>
              ),
            }
          : {
              status: "process",
              title: (
                <CustomTypography type="textMs">
                  {translateAction[action.action]}
                </CustomTypography>
              ),
              description: () => {
                const player =
                  match.team.find((player) => player.id === action.playerId) ??
                  match.team[0];
                return (
                  <div className={styles.tooltip}>
                    <div className={styles.actionPlayer}>
                      <img
                        src={player.url}
                        alt={`${action.playerId}`}
                      />
                    </div>
                    <CustomTypography type="subtitle">{`Номер: ${player.number}`}</CustomTypography>
                    <CustomTypography type="subtitle">{`Минута ${action.minutes}`}</CustomTypography>
                  </div>
                );
              },
            }
      ),
    [match]
  );
  return (
    <List.Item>
      <div className={styles.root}>
        <div className={styles.item}>
          <CustomTypography type="textMs">
            Наша команда на поле
          </CustomTypography>
          <Swiper
            direction="vertical"
            slidesPerView={1}
            spaceBetween={30}
            mousewheel
            pagination={{
              clickable: true,
            }}
            grabCursor
            modules={[Mousewheel, Pagination]}
            className={styles.slider}
          >
            {match.team.map((player) => (
              <SwiperSlide key={player.id}>
                <PlayerImage player={player} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.item}>
          <div className={styles.vsEnemy}>
            <CustomTypography
              type="title"
              className={styles.burn}
            >
              БУРАН
            </CustomTypography>
            <CustomTypography
              type="h1"
              className={styles.vs}
            >
              VS
            </CustomTypography>
            <CustomTypography
              type="title"
              className={styles.enemy}
            >
              {match.enemy}
            </CustomTypography>
          </div>
          <div className={styles.item}>
            <CustomTypography
              type="textM"
              className={styles.burn}
            >
              Главные моменты матча
            </CustomTypography>
            <div className={styles.actionWrapper}>
              <Steps
                type="inline"
                items={itemsAction}
                className={styles.actions}
              />
            </div>
          </div>
        </div>
        {isAuth && (
          <>
            <button
              type="button"
              className={styles.match__plus}
              onClick={() => setOpen(true)}
            >
              <Plus />
            </button>
            <button
              type="button"
              className={styles.match__delete}
              onClick={onDelete}
            >
              <Delete />
            </button>
          </>
        )}
        <AddMatchActivitesForm
          setMatch={setMatch}
          match={match}
          open={open}
          onClose={() => setOpen(false)}
        />
      </div>
    </List.Item>
  );
};

export default Match;
