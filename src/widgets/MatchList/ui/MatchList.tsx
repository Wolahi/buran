import { FloatButton, List } from "antd";

import Match from "@/entity/Match/ui/Match.tsx";
import useGetMatches from "@/widgets/MatchList/module/useGetMatches.ts";
import { useState } from "react";
import { useAuthContext } from "@/app/module/hooks/useAuthContext";
import AddMatchForm from "@/features/AddMatchForm/ui/AddMatchForm";
import { PlusOutlined } from "@ant-design/icons";

const MatchList = () => {
  const { matches, setMatches } = useGetMatches();
  const [open, setOpen] = useState(false);
  const { isAuth } = useAuthContext();

  return (
    <List>
      {matches.map((match) => (
        <Match
          key={match.id}
          match={match}
          setMatch={setMatches}
        />
      ))}
      {isAuth && (
        <FloatButton
          icon={<PlusOutlined />}
          onClick={() => setOpen(true)}
        />
      )}
      <AddMatchForm
        setMatch={setMatches}
        open={open}
        onClose={() => setOpen(false)}
      />
    </List>
  );
};

export default MatchList;
