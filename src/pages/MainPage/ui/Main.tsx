import { useMemo } from "react";

import useGetSeason from "@/shared/module/useGetSeason.ts";
import { CustomTypography } from "@/shared/ui/CustomTypography";
import About from "@/widgets/About/about.tsx";
import SeasonList from "@/widgets/SeasonList/SeasonList.tsx";

const Main = () => {
  const { seasons } = useGetSeason();

  const data = useMemo(
    () =>
      seasons.map((season) => ({
        id: season.title,
        title: `Сезон ${season.title} гг.`,
        link: `/season/${season.title}`,
      })),
    [seasons],
  );

  return (
    <div>
      <section className="section section--bg-white">
        <div className="inner">
          <div className="section-head">
            <CustomTypography type="h2">О нас</CustomTypography>
          </div>
          <About />
        </div>
      </section>
      <section className="section" id="sectionSeasons">
        <div className="inner">
          <div className="section-head">
            <CustomTypography type="h2">Архив сезонов</CustomTypography>
          </div>
          <SeasonList items={data} />
        </div>
      </section>
    </div>
  );
};

export default Main;
