import { IPerson } from '../../models/IPeople';
import formatToDDMMYYYY from '../../helpers/dateFormatter';
import { SearchCard, SearchImgWrapper } from '../Common/SearchCard';

interface IProps {
  person: IPerson;
}

const showBirthdayAsFormatted = (birthday: string) => {
  if (!birthday) {
    return 'N/A';
  }
  return formatToDDMMYYYY(birthday);
};

export function PeopleCard({ person }: React.FC<IProps>) {
  return (
    <SearchCard>
      <SearchImgWrapper>
        {person.image ? (
          <img src={person.image.medium} alt="Show Poster" />
        ) : (
          <img src="../../public/image_not_found.png" height={128} alt={person.name} />
        )}
      </SearchImgWrapper>
      <h1>{person.name}</h1>
      <p>Gender is: {person.gender ?? ''}</p>
      <p>Country is: {person.country?.name ?? ''}</p>
      <p>Birthday is: {showBirthdayAsFormatted(person.birthday) ?? ''}</p>
    </SearchCard>
  );
}
