import { MatchInfo, Team } from "../types";

const InfoPage = ({
  matchData,
}: {
  matchData: {
    matchResult: string;
    teamA: string;
    teamB: string;
    matchInfo: MatchInfo;
    teamA_Squad: Team;
    teamB_Squad: Team;
  };
}) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Match Information</h1>
      <p className="mb-2">
        <strong>Match:</strong> {matchData.matchInfo.teams},{" "}
        {matchData.matchInfo.matchType}, {matchData.matchInfo.series}
      </p>
      <p className="mb-2">
        <strong>Series:</strong> {matchData.matchInfo.series}
      </p>
      <p className="mb-2">
        <strong>Date:</strong> {matchData.matchInfo.date}
      </p>
      <p className="mb-2">
        <strong>Toss:</strong> {matchData.matchInfo.toss}
      </p>
      <p className="mb-2">
        <strong>Time:</strong> {matchData.matchInfo.time}
      </p>
      <p className="mb-2">
        <strong>Venue:</strong> {matchData.matchInfo.venue}
      </p>
      <p className="mb-2">
        <strong>Umpires:</strong> {matchData.matchInfo.umpires.join(", ")}
      </p>
      <p className="mb-2">
        <strong>Third Umpire:</strong> {matchData.matchInfo.thirdUmpire}
      </p>
      <p className="mb-2">
        <strong>Match Referee:</strong> {matchData.matchInfo.matchReferee}
      </p>

      <h2 className="text-xl font-bold mt-4 mb-2">{matchData.teamA} Squad</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Players</h3>
        <p>{matchData.teamA_Squad.playing11.join(",  ")}</p>

        <h3 className="text-lg font-semibold">Bench</h3>
        <p className="mb-2">{matchData.teamA_Squad.bench.join(", ")}</p>

        <h3 className="text-lg font-semibold">Support Staff</h3>
        <p>{matchData.teamA_Squad.supportStaff.join(", ")}</p>
      </div>

      <h2 className="text-xl font-bold mt-4 mb-2">{matchData.teamB} Squad</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Players</h3>
        <p>{matchData.teamB_Squad.playing11.join(",  ")}</p>

        <h3 className="text-lg font-semibold">Bench</h3>
        <p className="mb-2">{matchData.teamB_Squad.bench.join(", ")}</p>

        <h3 className="text-lg font-semibold">Support Staff</h3>
        <p>{matchData.teamB_Squad.supportStaff.join(", ")}</p>
      </div>
    </div>
  );
};

export default InfoPage;
