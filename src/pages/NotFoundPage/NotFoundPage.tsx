import style from "./styles.module.scss";

import notFoundPageImage from "@/assets/notFoundPageImage.png";

const NotFoundPage = () => (
  <div className={style.notFoundPage}>
    <div className={style.notFoundPage__content}>
      <div className={style.notFoundPage__image}>
        <img
          src={notFoundPageImage}
          alt="404 Not Found"
        />
      </div>
      <div className={style.notFoundPage__text}>
        {" "}
        404 - Странца не <span className="text-nowrap">найдена! :(</span>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
