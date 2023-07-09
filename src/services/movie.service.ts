import { IMovie } from '../models/IMovie';

const BASE_SEARCH_URL = `${import.meta.env.VITE_API_URL}/search/shows`;

export class MovieService {
  static async getMovieBySearch(searchTerm: string): Promise<IMovie[]> {
    try {
      const response = await fetch(
        `${BASE_SEARCH_URL}?q=${searchTerm}`
      );
      return await response.json() as IMovie[];
    } catch (error) {
      console.error('Error fetching movie by search: ', error);
    }
  }
}
