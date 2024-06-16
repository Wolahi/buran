import { useMemo } from "react";
import { Link } from "react-router-dom";

import style from "./header.module.scss";

import { useAuthContext } from "@/app/module/hooks/useAuthContext.ts";
import logo from "@/assets/logo.png";
import useGetSeason from "@/shared/module/useGetSeason.ts";
import DropDown from "@/shared/ui/DropDown";

const Header = () => {
  const { seasons } = useGetSeason();
  const { isAuth } = useAuthContext();

  const data = useMemo(
    () =>
      seasons
        .map((season) => ({
          id: season.title,
          text: `Сезон ${season.title} гг.`,
          link: `/season/${season.title}`,
        }))
        .splice(seasons.length - 2, 2),
    [seasons]
  );

  return (
    <header className={style.header}>
      <div className={style.headerWrapper}>
        <div className="inner">
          <div className={style.header__content}>
            <Link
              to="/"
              className={style.header__logo}
            >
              <img
                src={logo}
                alt="Логотип «Буран»"
              />
            </Link>
            <nav className={style.header__nav}>
              <div className={style.header__seasons}>
                <DropDown
                  title="Выбор сезона"
                  items={[
                    {
                      text: "Архив сезонов",
                      link: "/#sectionSeasons",
                      id: "0",
                    },
                    ...data,
                  ]}
                  mods="white"
                />
              </div>
              <Link to={`/commands`}>Команда</Link>
              {isAuth && "Админ"}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
