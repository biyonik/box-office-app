import { IShow } from '../models/IShow';
const { VITE_API_URL } = import.meta.env;

const BASE_SEARCH_URL = `${VITE_API_URL}/search/shows`;

export class MovieService {
  static async getMovieBySearch(searchTerm: string): Promise<IShow[]> {
    try {
      const response = await fetch(`${BASE_SEARCH_URL}?q=${searchTerm}`);
      return (await response.json()) as IShow[];
    } catch (error) {
      console.error('Error fetching movie by search: ', error);
      return [];
    }
  }
}
