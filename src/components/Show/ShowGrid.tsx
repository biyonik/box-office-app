import { IShow } from '../../models/IShow';
import React from 'react';
import ShowCard from './ShowCard';

interface IProps {
  shows: IShow[];
}

export default function ShowGrid({ shows }: React.FC<IProps>) {
  return (
    <div>
      {shows.map(({ show }: IShow) => (
        <ShowCard key={show.id} show={show} />
      ))}
    </div>
  );
}
