import { PlayerResultsProps } from "./interfaces/PlayerResultsProps";

const PlayerResults = ({ player, actions }: PlayerResultsProps) => (
  <div>
    {player?.name}
    <span>{actions?.GOAL}</span>
  </div>
);

export default PlayerResults;
