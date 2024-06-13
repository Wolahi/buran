import { CustomTypography } from "@/shared/ui/CustomTypography";
import About from "@/widgets/About/about";
import Hero from "@/widgets/Hero/hero.tsx";
import SeasonList from "@/widgets/SeasonList/SeasonList";

const Main = () => {
  const data = [
    { id: 0, title: "Сезон 2022-2023 гг.", link: "#" },
    { id: 1, title: "Сезон 2023-2024 гг.", link: "#" },
  ];

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
          <SeasonList items={data} />
        </div>
      </section>
    </section>
  );
};

export default Main;
