import style from "./styles.module.scss";

import About from "@/widgets/About/about.tsx";

const IndexPage = () => (
  <div className={style.branching}>
    <div className="inner">
      <h3 className={style.branching__title}>Страницы: </h3>
      <a className={style.branching__name} href="/main">
        Main Page
      </a>
      <br />
      <br />
      <a className={style.branching__name} href="/admin">
        Admin Page
      </a>
      <br />
      <br />
      <a className={style.branching__name} href="/commands">
        Comands Page
      </a>
    </div>
    <About />
  </div>
);

export default IndexPage;
