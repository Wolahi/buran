import { Link } from "react-router-dom";

import style from "./header.module.scss";

import logo from "@/assets/logo.png";
import DropDown from "@/shared/DropDown";

const Header = () => (
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
                  { text: "Архив сезонов", link: "/", id: 0 },
                  { text: "Сезон 2022-2023 гг.", link: "#", id: 1 },
                  { text: "Сезон 2023-2024 гг.", link: "#", id: 2 },
                ]}
                mods="white"
              />
            </div>
            <Link to="/commands">Команды</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
