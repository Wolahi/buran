import { List } from "antd";

import Match from "@/entity/Match/ui/Match.tsx";
import { seasonMatchesMock } from "@/shared/config/seasonMatchesMock.ts";

const MatchList = () => (
  <List>
    {seasonMatchesMock.map((match) => (
      <Match key={match.id} match={match} />
    ))}
  </List>
);

export default MatchList;
