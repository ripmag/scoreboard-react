export interface GameDTO
 {
    id: number;
    team2Name: string;
    setsScore: string[];
    team1Score: number;
    team2Score: number;
    setsWinTeam1: number;
    setsWinTeam2: number;
    isGameOver: boolean;
  }