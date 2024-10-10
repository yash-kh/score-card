import { Request, Response } from 'express';
import { fetchScorecardById } from '../services/scorecardService';

export const getScorecardById = (req: Request, res: Response): void => {
  const { id } = req.params;

  const scorecard = fetchScorecardById(parseInt(id, 10));

  if (scorecard) {
    res.status(200).json(scorecard);
  } else {
    res.status(404).json({ message: `Scorecard with ID ${id} not found` });
  }
};
