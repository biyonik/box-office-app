import { Cast } from '../../../models/IShow';
import styled from 'styled-components';

interface IProps {
  casts: Cast[];
}

const CastList = styled.div`
  display: flex;
  flex-wrap: wrap;

  .cast-item {
    flex: 1 0 50%;
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    @media only screen and (max-width: 768px) {
      flex: 1 0 100%;
    }
  }

  .pic-wrapper {
    width: 50px;
    min-width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .actor {
    margin-left: 25px;
  }
`;

export default function Casts({ casts }: React.FC<IProps>) {
  return (
    <CastList>
      {casts.length > 0 &&
        casts.map((cast: Cast) => (
          <div className="cast-item" key={cast.person.id}>
            <div className="pic-wrapper">
              {cast.person.image ? (
                <img src={cast.person.image.medium} alt="Show Poster" />
              ) : (
                <img src="../../public/image_not_found.png" height={128} alt={cast.person.name} />
              )}
            </div>

            <div className="actor">
              <p>Character: {cast.character.name}</p>
              <p>Person: {cast.person.name}</p>
            </div>
          </div>
        ))}
    </CastList>
  );
}
