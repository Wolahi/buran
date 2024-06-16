import CommandPlayers from "@/widgets/CommandPlayers/ui/CommandPlayers";
import style from "./commandspage.module.scss";

const CommandsPage = () => {
  return (
    <div className={style.cpage}>
      <CommandPlayers />
    </div>
  );
};

export default CommandsPage;
