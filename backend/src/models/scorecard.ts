export interface Team {
  playing11: string[];
  bench: string[];
  supportStaff: string[];
}

export interface Batter {
  name: string;
  dismissal: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  strikeRate: number;
}

export interface BowlingInning {
  bowler: string;
  overs: number;
  maidens: number;
  runs: number;
  wickets: number;
  noBalls: number;
  wides: number;
  economyRate: number;
}

export interface FallOfWicket {
  player: string;
  score: string;
  over: string;
}

export interface Powerplays {
  overs: string;
  runs: number;
}

export interface Partnerships {
  players: string[];
  eachRun: string[];
  runs: string;
}

export interface Extras {
  total: number;
  byes: number;
  legByes: number;
  wides: number;
  noBalls: number;
  penalty: number;
}

export interface Scorecard {
  score: string;
  batters: Batter[];
  extras: Extras;
  totalScore: string;
  wickets: number;
  overs: number;
}

export interface MatchInfo {
  teams: string;
  matchType: string;
  series: string;
  date: string;
  toss: string;
  time: string;
  venue: string;
  umpires: string[];
  thirdUmpire: string;
  matchReferee: string;
}

export interface ScoreCardResponse {
  id: number;
  matchResult: string;
  teamA: string;
  teamA_Code: string;
  teamB: string;
  teamB_Code: string;
  matchInfo: MatchInfo;
  teamA_Squad: Team;
  teamB_Squad: Team;
  teamA_Scorecard: Scorecard;
  teamA_FallOfWickets: FallOfWicket[];
  teamA_BowlingInnings: BowlingInning[];
  teamA_Powerplays: Powerplays;
  teamA_Partnerships: Partnerships[];
  teamB_Scorecard: Scorecard;
  teamB_BowlingInnings: BowlingInning[];
  teamB_FallOfWickets: FallOfWicket[];
  teamB_Powerplays: Powerplays;
  teamB_Partnerships: Partnerships[];
}
