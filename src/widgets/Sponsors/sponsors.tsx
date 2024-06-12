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
      ПАРТНЕРЫ ХК "БУРАН"
    </CustomTypography>
    <div className={style.sponsors__content}>
      <div className={style.sponsors__image}>
        <img
          src={negorod}
          alt=""
        />
      </div>
      <div className={style.sponsors__image}>
        <img
          src={arena}
          alt=""
        />
      </div>

      <div className={style.sponsors__image}>
        <img
          src={tv}
          alt=""
        />
      </div>
      <div className={style.sponsors__image}>
        <img
          src={bassein}
          alt=""
        />
      </div>
    </div>
  </div>
);
export default Sponsors;
