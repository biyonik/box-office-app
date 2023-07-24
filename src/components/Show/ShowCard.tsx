import { IShow } from '../../models/IShow';
import formatToDDMMYYYY from '../../helpers/dateFormatter.js';
import onlyTenWords from '../../helpers/stringFormatter';
import styled from 'styled-components';
import { SearchCard, SearchImgWrapper } from '../Common/SearchCard';
import { StarIcon } from '../Common/StarIcon';
import { StarBtn } from '../Common/StarBtn';
import { useRef } from 'react';

const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration-color: #000;
    color: #000;

    &:hover {
      text-decoration-color: blue;
      color: blue;
    }
  }
`;

interface IProps {
  show: IShow;
  onStarMeClick: (showId: any) => void;
  isStarred: boolean;
}

const showPremieredAsFormatted = (premiered: string) => {
  if (!premiered) {
    return 'N/A';
  }
  return formatToDDMMYYYY(premiered);
};

export default function ShowCard({ show, onStarMeClick, isStarred = false }: React.FC<IProps>) {
  const starBtnRef = useRef<HTMLButtonElement>(null);

  const handleStarClick = () => {
    onStarMeClick(show.id);
    const starButtonElem = starBtnRef.current;
    if (!starButtonElem) {
      return;
    }

    if (isStarred) {
      starButtonElem.classList.remove('animate');
    } else {
      starButtonElem.classList.add('animate');
    }
  };

  return (
    <SearchCard>
      <SearchImgWrapper>
        {show.image ? (
          <img src={show.image.medium} alt="Show Poster" />
        ) : (
          <img src="../../public/image_not_found.png" height={128} alt={show.name} />
        )}
      </SearchImgWrapper>
      <h2>{show.name}</h2>
      <p>
        <b>Premiered:</b> {showPremieredAsFormatted(show.premiered)}
      </p>
      <p>
        <b>Rating:</b> {show.rating.average ?? 'not available'}
      </p>
      <p>
        <b>Genres:</b> {show.genres?.join(', ') ?? ''}
      </p>
      <p>
        <b>Summary:</b> {onlyTenWords(show.summary)}
      </p>
      <ActionSection>
        <a href={`/show/${show.id}`} target={'_blank'} rel={'noreferrer'}>
          Read more
        </a>
        <StarBtn ref={starBtnRef} type={'button'} onClick={handleStarClick} className={isStarred && 'animate'}>
          <StarIcon active={isStarred} />
        </StarBtn>
      </ActionSection>
    </SearchCard>
  );
}
