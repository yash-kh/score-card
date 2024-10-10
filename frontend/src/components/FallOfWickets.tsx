import { FallOfWicket } from "../types";

const FallOfWickets = ({
  fallOfWickets,
}: {
  fallOfWickets: FallOfWicket[];
}) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Fall of Wickets</h2>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Player</th>
            <th className="border border-gray-300 p-2">Score</th>
            <th className="border border-gray-300 p-2">Over</th>
          </tr>
        </thead>
        <tbody>
          {fallOfWickets.map((wicket, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="border border-gray-300 p-2">{wicket.player}</td>
              <td className="border border-gray-300 p-2">{wicket.score}</td>
              <td className="border border-gray-300 p-2">{wicket.over}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FallOfWickets;
