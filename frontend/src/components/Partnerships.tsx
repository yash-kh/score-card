import { Partnerships } from "../types";

const Partnership = ({ partnerships }: { partnerships: Partnerships[] }) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Partnerships</h2>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">A</th>
            <th className="border border-gray-300 p-2">Runs</th>
            <th className="border border-gray-300 p-2">B</th>
          </tr>
        </thead>
        <tbody>
          {partnerships.map((partnership, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="border border-gray-300 p-2">
                {partnership.players[0]}, {partnership.eachRun[0]}
              </td>
              <td className="border border-gray-300 p-2">{partnership.runs}</td>
              <td className="border border-gray-300 p-2">
                {partnership.players[1]}, {partnership.eachRun[1]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Partnership;
