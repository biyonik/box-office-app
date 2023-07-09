import { IPeople, IPerson } from '../../models/IPeople';
import { PeopleCard } from './PeopleCard';

interface IProps {
  people: IPeople[];
}

export default function PeopleGrid({ people }: React.FC<IProps>) {
  return (
    <div>
      {people.map(({ person }: IPerson) => (
        <PeopleCard key={person.id} person={person} />
      ))}
    </div>
  );
}
