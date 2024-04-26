import axios, { AxiosResponse } from 'axios';

// Интерфейс для данных, получаемых от сервера
interface ApiResponse {
  team2Name: string;
  setsScore: string[];
  team1Score: number;
  team2Score: number;
  setsWinTeam1: number;
  setsWinTeam2: number;
  isGameOver: boolean;
}

class ApiService {

  private baseUrl = 'http://localhost:3000/games';

  async get(endpoint: string): Promise<ApiResponse> {
    const url = `${this.baseUrl}/${endpoint}`
    try {
      const response: AxiosResponse = await axios.get(url);
      return response.data;

    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  getGames(): Promise<ApiResponse> {
    return this.get('getGames');
  }
}

const apiService = new ApiService();

export default apiService;