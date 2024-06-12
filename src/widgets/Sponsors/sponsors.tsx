import style from "./sponsors.module.scss";

import negorod from "@/assets/about/negorod.png";
import bassein from "@/assets/about/negorod_bassein.png";
import arena from "@/assets/about/plat_arena.png";
import tv from "@/assets/about/tv_gubernia.png";
import CustomTypography from "@/shared/ui/CustomTypography/ui/CustomTypography.tsx";

const Sponsors = () => (
  <div className={style.sponsors}>
    <div className={style.sponsors__position}>
      <CustomTypography type="h2" className={style.sponsors__toptext}>
        ПАРТНЕРЫ ХК "БУРАН"
      </CustomTypography>
      <img src={arena} />
      <img src={negorod} />
      <img src={bassein} />
      <img src={tv} />
    </div>
  </div>
);
export default Sponsors;
