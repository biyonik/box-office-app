import { usePersistedState } from './usePersistedState';
import { SEARCH_STATE_KEY } from '../constants/global';

export const useSearchTerm = () => usePersistedState(SEARCH_STATE_KEY, '');
