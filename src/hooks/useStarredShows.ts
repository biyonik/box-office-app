import { usePersistedReducer } from './usePersistedReducer';
import { STARRED_SHOWS } from '../constants/global';

const starredShowsReducer = (currentStarred: any, action: any) => {
  switch (action.type) {
    case 'STAR':
      return currentStarred.concat(action.showId);
    case 'UNSTAR':
      return currentStarred.filter((showId: any) => showId !== action.showId);
    default:
      return currentStarred;
  }
};

export const useStarredShows = () => {
  const [starredShows, dispatchStarred] = usePersistedReducer(starredShowsReducer, [] as any[], STARRED_SHOWS);
  return [starredShows, dispatchStarred];
};
