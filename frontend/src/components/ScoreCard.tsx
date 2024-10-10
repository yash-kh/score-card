import { useEffect, useState } from "react";
import { Scorecard } from "../types";

const useWindowSize = () => {
  const [size, setSize] = useState({ width: window.innerWidth });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};

const ScoreCard = ({
  scoreCard,
  name,
  code,
}: {
  scoreCard: Scorecard;
  name: string;
  code: string;
}) => {
  const { score, batters, extras, totalScore, wickets, overs } = scoreCard;
  const { width } = useWindowSize();

  const isTabletOrSmaller = width < 768;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2 bg-[#009270] text-white pl-2">
        {name} Innings
      </h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Score: {score}</h3>
        <p className="text-sm text-gray-600">
          Total: {totalScore}, Wickets: {wickets}, Overs: {overs}
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Batters</h3>
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Name</th>
              {/* Conditionally render the Dismissal header */}
              {!isTabletOrSmaller && (
                <th className="border border-gray-300 p-2">Dismissal</th>
              )}
              <th className="border border-gray-300 p-2">R</th>
              <th className="border border-gray-300 p-2">B</th>
              <th className="border border-gray-300 p-2">F</th>
              <th className="border border-gray-300 p-2">S</th>
              <th className="border border-gray-300 p-2">SR</th>
            </tr>
          </thead>
          <tbody>
            {batters.map((batter, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="border border-gray-300 p-2">{batter.name}</td>
                {/* Conditionally render the Dismissal data */}
                {!isTabletOrSmaller && (
                  <td className="border border-gray-300 p-2">
                    {batter.dismissal}
                  </td>
                )}
                <td className="border border-gray-300 p-2">{batter.runs}</td>
                <td className="border border-gray-300 p-2">{batter.balls}</td>
                <td className="border border-gray-300 p-2">{batter.fours}</td>
                <td className="border border-gray-300 p-2">{batter.sixes}</td>
                <td className="border border-gray-300 p-2">
                  {batter.strikeRate.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Extras</h3>
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-center">Total</th>
              <th className="border border-gray-300 p-2 text-center">Byes</th>
              <th className="border border-gray-300 p-2 text-center">
                Leg Byes
              </th>
              <th className="border border-gray-300 p-2 text-center">Wides</th>
              <th className="border border-gray-300 p-2 text-center">
                No Balls
              </th>
              <th className="border border-gray-300 p-2 text-center">
                Penalty
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 text-center">
                {extras.total}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {extras.byes}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {extras.legByes}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {extras.wides}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {extras.noBalls}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {extras.penalty}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScoreCard;
