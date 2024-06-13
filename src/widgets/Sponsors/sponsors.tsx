import style from "./sponsors.module.scss";

import negorod from "@/assets/about/negorod.png";
import bassein from "@/assets/about/negorod_bassein.png";
import arena from "@/assets/about/plat_arena.png";
import tv from "@/assets/about/tv_gubernia.png";
import CustomTypography from "@/shared/ui/CustomTypography/ui/CustomTypography.tsx";

const Sponsors = () => (
  <div className={style.sponsors}>
    <CustomTypography
      type="title"
      className={style.sponsors__head}
    >
      Партнеры ХК «Буран»:
    </CustomTypography>
    <div className={style.sponsors__content}>
      <div className={style.sponsors__image}>
        <img
          src={negorod}
          alt=""
          loading="lazy"
        />
      </div>
      <div className={style.sponsors__image}>
        <img
          src={arena}
          alt=""
          loading="lazy"
        />
      </div>

      <div className={style.sponsors__image}>
        <img
          src={tv}
          alt=""
          loading="lazy"
        />
      </div>
      <div className={style.sponsors__image}>
        <img
          src={bassein}
          alt=""
          loading="lazy"
        />
      </div>
    </div>
  </div>
);
export default Sponsors;
