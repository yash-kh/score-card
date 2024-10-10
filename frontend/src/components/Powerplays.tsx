import { Powerplays } from "../types";

const Powerplay = ({ powerplays }: { powerplays: Powerplays }) => {
  return (
    <div className="p-4">
      <div className="w-full max-w-lg">
        {" "}
        {/* Set a max-width for the table */}
        <h2 className="text-lg font-semibold mb-2">Powerplays</h2>
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Overs</th>
              <th className="border border-gray-300 p-2">Runs</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border border-gray-300 p-2">{powerplays.overs}</td>
              <td className="border border-gray-300 p-2">{powerplays.runs}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Powerplay;
