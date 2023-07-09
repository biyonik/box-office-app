import { IPeople } from '../models/IPeople';

const { VITE_API_URL } = import.meta.env;

const BASE_SEARCH_URL = `${VITE_API_URL}/search/people`;

export class PeopleService {
  static async getPeopleBySearch(searchTerm: string): Promise<IPeople[]> {
    try {
      const response = await fetch(`${BASE_SEARCH_URL}?q=${searchTerm}`);
      return (await response.json()) as IPeople[];
    } catch (error) {
      console.error('Error fetching people by search: ', error);
      return [];
    }
  }
}
