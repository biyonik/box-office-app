import { IShow } from '../../models/IShow';
import React from 'react';
import ShowCard from './ShowCard';
import { usePersistedReducer } from '../../hooks/usePersistedReducer';
import { STARRED_SHOWS } from '../../constants/global';

interface IProps {
  shows: IShow[];
}

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

export default function ShowGrid({ shows }: React.FC<IProps>) {
  const [starredShows, dispatchStarred] = usePersistedReducer(starredShowsReducer, [] as any[], STARRED_SHOWS);

  const handleStarClick = (showId: any) => {
    if (starredShows.includes(showId)) {
      dispatchStarred({ type: 'UNSTAR', showId });
    } else {
      dispatchStarred({ type: 'STAR', showId });
    }
  };

  console.log('starredShows :: => ', starredShows);

  return (
    <div>
      {shows.map(({ show }: IShow) => (
        <ShowCard key={show.id} show={show} onStarMeClick={handleStarClick} />
      ))}
    </div>
  );
}
