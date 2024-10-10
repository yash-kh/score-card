import scorecards from "../data/scorecards.json";
import { ScoreCardResponse } from "../models/scorecard";

export const fetchScorecardById = (
  id: number
): ScoreCardResponse | undefined => {
  return scorecards.find((scorecard: ScoreCardResponse) => scorecard.id === id);
};
