import { IShow } from '../models/IShow';

const { VITE_API_URL } = import.meta.env;

const BASE_SEARCH_URL = `${VITE_API_URL}/search/shows`;

export class ShowService {
  static async getShowBySearch(searchTerm: string): Promise<IShow[]> {
    try {
      const response = await fetch(`${BASE_SEARCH_URL}?q=${searchTerm}`);
      return (await response.json()) as IShow[];
    } catch (error) {
      console.error('Error fetching movie by search: ', error);
      return [];
    }
  }

  static async getShowById(id: string): Promise<IShow> {
    try {
      const response = await fetch(`${VITE_API_URL}/shows/${id}?embed[]=cast&embed[]=seasons`);
      return (await response.json()) as IShow;
    } catch (error) {
      console.error('Error fetching movie by id: ', error);
      return {} as IShow;
    }
  }

  static async getShowsByIds(ids: string[]): Promise<IShow[]> {
    try {
      const promises = ids.map((showId: any) => ShowService.getShowById(showId));
      return await Promise.all(promises);
    } catch (error) {
      console.error('Error fetching movies by ids: ', error);
      return [];
    }
  }
}
