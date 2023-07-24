import { IPeople, IPerson } from '../../models/IPeople';
import { PeopleCard } from './PeopleCard';
import { FlexGrid } from '../Common/FlexGrid';

interface IProps {
  people: IPeople[];
}

export default function PeopleGrid({ people }: React.FC<IProps>) {
  return (
    <FlexGrid>
      {people.map(({ person }: IPerson) => (
        <PeopleCard key={person.id} person={person} />
      ))}
    </FlexGrid>
  );
}
