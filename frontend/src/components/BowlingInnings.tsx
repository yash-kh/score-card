import { BowlingInning } from "../types";

const BowlingInnings = ({ bowlers }: { bowlers: BowlingInning[] }) => {
  if (!bowlers) {
    return <div>Loading...</div>;
  }
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Bowlers</h2>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Bowler</th>
            <th className="border border-gray-300 p-2">O</th>
            <th className="border border-gray-300 p-2">M</th>
            <th className="border border-gray-300 p-2">R</th>
            <th className="border border-gray-300 p-2">W</th>
            <th className="border border-gray-300 p-2">NB</th>
            <th className="border border-gray-300 p-2">WD</th>
            <th className="border border-gray-300 p-2">ECO</th>
          </tr>
        </thead>
        <tbody>
          {bowlers.map((bowler, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="border border-gray-300 p-2">{bowler.bowler}</td>
              <td className="border border-gray-300 p-2">{bowler.overs}</td>
              <td className="border border-gray-300 p-2">{bowler.maidens}</td>
              <td className="border border-gray-300 p-2">{bowler.runs}</td>
              <td className="border border-gray-300 p-2">{bowler.wickets}</td>
              <td className="border border-gray-300 p-2">{bowler.noBalls}</td>
              <td className="border border-gray-300 p-2">{bowler.wides}</td>
              <td className="border border-gray-300 p-2">
                {bowler.economyRate.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BowlingInnings;
