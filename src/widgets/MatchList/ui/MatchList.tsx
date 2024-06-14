import { List } from "antd";

import Match from "@/entity/Match/ui/Match.tsx";
import useGetMatches from "@/widgets/MatchList/module/useGetMatches.ts";

const MatchList = () => {
  const { matches } = useGetMatches();
  return (
    <List>
      {matches.map((match) => (
        <Match key={match.id} match={match} />
      ))}
    </List>
  );
};

export default MatchList;
