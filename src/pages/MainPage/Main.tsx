import SeasonList from "@/widgets/SeasonList/SeasonList";

const Main = () => {
  const data = [
    { id: 0, title: "Сезон 2022-2023 гг.", link: "#" },
    { id: 1, title: "Сезон 2023-2024 гг.", link: "#" },
  ];

  return (
    <div>
      <section className="section">
        <div className="inner">
          <div className="section-head">
            <h2>Список сезонов</h2>
          </div>
          <div className="section-head">
            <h2>Список сезонов</h2>
          </div>
          <div className="section-head">
            <h2>Список сезонов</h2>
          </div>
          <div className="section-head">
            <h2>Список сезонов</h2>
          </div>
          <div className="section-head">
            <h2>Список сезонов</h2>
          </div>
          <div className="section-head">
            <h2>Список сезонов</h2>
          </div>
          <div className="section-head">
            <h2>Список сезонов</h2>
          </div>
          <div className="section-head">
            <h2>Список сезонов</h2>
          </div>
          <div className="section-head">
            <h2>Список сезонов</h2>
          </div>

          <div className="section-head">
            <h2>Список сезонов</h2>
          </div>
          <div className="section-head">
            <h2>Список сезонов</h2>
          </div>
          <div
            id="seasonList"
            className="section-head"
          >
            <h2>Список сезонов</h2>
          </div>
          <SeasonList items={data} />
        </div>
      </section>
    </div>
  );
};

export default Main;
