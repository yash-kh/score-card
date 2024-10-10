import { useEffect, useState } from "react";
import { ScoreCardResponse } from "./types";
import ScoreCard from "./components/ScoreCard";
import BowlingInnings from "./components/BowlingInnings";
import FallOfWickets from "./components/FallOfWickets";
import Powerplay from "./components/Powerplays";
import Partnership from "./components/Partnerships";
import InfoPage from "./components/InfoPage";

const App = () => {
  const [scorecard, setScorecard] = useState<ScoreCardResponse | null>(null);

  useEffect(() => {
    fetch("http://localhost:4000/scorecard/1")
      .then((response) => response.json())
      .then((data) => setScorecard(data))
      .catch((error) => console.error(error));
  }, []);

  if (!scorecard) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 className="text-2xl font-bold m-2 text-center bg-slate-500 text-white">
        {scorecard.matchResult}
      </h1>
      <ScoreCard
        scoreCard={scorecard.teamA_Scorecard}
        name={scorecard.teamA}
        code={scorecard.teamA_Code}
      />
      <BowlingInnings bowlers={scorecard.teamA_BowlingInnings} />
      <FallOfWickets fallOfWickets={scorecard.teamA_FallOfWickets} />
      <Powerplay powerplays={scorecard.teamA_Powerplays} />
      <Partnership partnerships={scorecard.teamA_Partnerships} />
      <ScoreCard
        scoreCard={scorecard.teamB_Scorecard}
        name={scorecard.teamB}
        code={scorecard.teamB_Code}
      />
      <BowlingInnings bowlers={scorecard.teamB_BowlingInnings} />
      <FallOfWickets fallOfWickets={scorecard.teamB_FallOfWickets} />
      <Powerplay powerplays={scorecard.teamB_Powerplays} />
      <Partnership partnerships={scorecard.teamB_Partnerships} />
      <InfoPage matchData={{ ...scorecard }} />
    </>
  );
};

export default App;
