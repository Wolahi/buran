import { useEffect, useMemo, useState } from "react";
import { List, Steps } from "antd";
import { StepsProps } from "antd/lib";
import dayjs from "dayjs";
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import useDeleteMatch from "../module/useDeleteMatch";

import styles from "./Match.module.scss";

import "swiper/css";
import "swiper/css/pagination";
import { useAuthContext } from "@/app/module/hooks/useAuthContext";
import Delete from "@/assets/delete.svg?react";
import Plus from "@/assets/plus.svg?react";
import { IMatchProps } from "@/entity/Match/ui/interfaces/IMatchProps.ts";
import AddMatchActivitesForm from "@/features/AddMatchActivitesForm/ui/AddMatchActivitesForm";
import { translateAction } from "@/shared/config/translateRoleTeam.ts";
import { CustomTypography } from "@/shared/ui/CustomTypography";
import PlayerImage from "@/shared/ui/PlayerImage/ui/PlayerImage.tsx";

const Match = ({ match, setMatch }: IMatchProps) => {
  const { isAuth } = useAuthContext();
  const { deleteMatch } = useDeleteMatch();
  const [open, setOpen] = useState(false);
  const [goal, setGoal] = useState(0);
  const [goalEnemy, setGoalEnemy] = useState(0);

  useEffect(() => {
    setGoal(0);
    setGoalEnemy(0);
    match.actions.map((el) => {
      if (el.action === "GOAL") {
        if (!el.enemy) setGoal((prev) => prev + 1);
        else setGoalEnemy((prev) => prev + 1);
      }
    });
  }, [match]);

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
                      <img src={player.url} alt={`${action.playerId}`} />
                    </div>
                    <CustomTypography type="subtitle">{`Номер: ${player.number}`}</CustomTypography>
                    <CustomTypography type="subtitle">{`Минута ${action.minutes}`}</CustomTypography>
                  </div>
                );
              },
            },
      ),
    [match],
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
          <CustomTypography type="textM" className={styles.burn}>
            {dayjs(match.dateStart).locale("ru").format("DD-MM-YYYY")}
          </CustomTypography>
          <div className={styles.vsEnemy}>
            <CustomTypography type="title" className={styles.burn}>
              БУРАН
            </CustomTypography>
            <CustomTypography type="h1" className={styles.vs}>
              VS
            </CustomTypography>
            <CustomTypography type="title" className={styles.enemy}>
              {match.enemy}
            </CustomTypography>
          </div>
          <CustomTypography type="title" style={{ fontWeight: 700 }}>
            {goal}:{goalEnemy}
          </CustomTypography>
          <div className={styles.item}>
            <CustomTypography type="textM" className={styles.burn}>
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
