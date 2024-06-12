import { CustomTypography } from "@/shared/ui/CustomTypography";
import SeasonList from "@/widgets/SeasonList/SeasonList";

const Main = () => {
  const data = [
    { id: 0, title: "Сезон 2022-2023 гг.", link: "#" },
    { id: 1, title: "Сезон 2023-2024 гг.", link: "#" },
  ];

  return (
    <div>
      <section
        className="section"
        id="sectionSeasons"
      >
        <div className="inner">
          <div className="section-head">
            <CustomTypography type="sectionHead">
              Список сезонов
            </CustomTypography>
          </div>
          <SeasonList items={data} />
        </div>
      </section>
    </div>
  );
};

export default Main;
