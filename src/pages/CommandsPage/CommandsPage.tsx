import style from "./commandspage.module.scss";

import CommandPlayers from "@/widgets/CommandPlayers/ui/CommandPlayers";

const CommandsPage = () => (
  <div className={style.cpage}>
    <CommandPlayers />
  </div>
);

export default CommandsPage;
