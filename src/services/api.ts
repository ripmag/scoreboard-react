import axios, { AxiosResponse } from 'axios';
import { GameDTO } from '../entities/game-dto';
import { host } from './socketApi';

// Интерфейс для данных, получаемых от сервера
export interface IApiResponse extends GameDTO { }

class ApiService {

  private baseUrl = `${host}/games`;
  private config = { headers: { 'Content-Type': 'application/json' } };

  async get(endpoint: string): Promise<IApiResponse[]> {
    const url = `${this.baseUrl}/${endpoint}`
    try {
      const { data }: AxiosResponse = await axios.get(url);
      
      return Array.isArray(data) ? data : [data];

    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  async post(endpoint: string, id: number): Promise<IApiResponse> {
    const url = `${this.baseUrl}/${id}/${endpoint}`;

    try {
      const response: AxiosResponse = await axios.post(url);
      return response.data;

    } catch (error) {
      console.error('Error post data:', error);
      throw error;
    }
  }

  async put(endpoint: string, id: number, content: any): Promise<IApiResponse> {
    const url = `${this.baseUrl}/${id}/${endpoint}`;

    try {
      const response: AxiosResponse = await axios.put(url, content, this.config);
      return response.data;

    } catch (error) {
      console.error('Error put data:', error);
      throw error;
    }
  }

  async delete(id: number): Promise<boolean> {
    const url = `${this.baseUrl}/${id}`;

    try {
      await axios.delete(url, this.config);
      return true;

    } catch (error) {
      console.error('Error delete data:', error);
      throw error;
    }
  }

  updateInfo(id: number, content: any) {console.log('aaaaaaaaa',id,content)
    return this.put('updateInfo', id, content)
  }

  onEditGameName(id: number, name: string) {
    return this.updateInfo(id, { gameName: name });
  }

  onEditTeam1(id: number, name: string) {
    return this.updateInfo(id, { team1Name: name });
  }

  onEditTeam2(id: number, name: string) {
    return this.updateInfo(id, { team2Name: name });
  }

  // async addPointTeam1(id: number) : Promise<IApiResponse> {
  //   return await this.post('addPointTeam1', id);
  // }

  // async addPointTeam2(id: number) : Promise<IApiResponse> {
  //   return await this.post('addPointTeam2', id);
  // }

  async getGames(): Promise<IApiResponse[]> {
    const response = await this.get('getGames');
    return Array.isArray(response) ? response : [response];
  }
}

const apiService = new ApiService();

export default apiService;