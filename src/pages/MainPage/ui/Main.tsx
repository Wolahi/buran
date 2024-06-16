import { useMemo } from "react";

import useGetSeason from "@/shared/module/useGetSeason.ts";
import { CustomTypography } from "@/shared/ui/CustomTypography";
import About from "@/widgets/About/about";
import Hero from "@/widgets/Hero/hero.tsx";
import SeasonList from "@/widgets/SeasonList/ui/SeasonList.tsx";

const Main = () => {
  const { seasons, setSeasons } = useGetSeason();

  const data = useMemo(
    () =>
      seasons.map((season) => ({
        id: season.title,
        title: season.title,
        link: `/season/${season.title}`,
      })),
    [seasons],
  );

  return (
    <section className="section">
      <Hero />
      <section className="section--bg-white">
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
            <CustomTypography type="h2" id="archive">
              Архив сезонов
            </CustomTypography>
          </div>
          <SeasonList items={data} setSeasons={setSeasons} />
        </div>
      </section>
    </section>
  );
};

export default Main;
