import { IShow } from '../../models/IShow';
import React from 'react';
import ShowCard from './ShowCard';
import { useStarredShows } from '../../hooks/useStarredShows';
import { FlexGrid } from '../Common/FlexGrid';

interface IProps {
  shows: IShow[];
}

export default function ShowGrid({ shows }: React.FC<IProps>) {
  const [starredShows, dispatchStarred] = useStarredShows();

  const handleStarClick = (showId: any) => {
    if (starredShows.includes(showId)) {
      dispatchStarred({ type: 'UNSTAR', showId });
    } else {
      dispatchStarred({ type: 'STAR', showId });
    }
  };

  const isStarred = (showId: any): boolean => starredShows.includes(showId);

  return (
    <FlexGrid>
      {shows.map(({ show }: IShow) => (
        <ShowCard key={show.id} show={show} onStarMeClick={handleStarClick} isStarred={isStarred(show.id)} />
      ))}
    </FlexGrid>
  );
}
