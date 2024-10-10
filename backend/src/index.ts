import express from 'express';
import cors from 'cors';
import { getScorecardById } from './controllers/scorecardController';

const app = express();

app.use(cors());
app.use(express.json());
const PORT = 4000;

app.get('/scorecard/:id', getScorecardById);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
