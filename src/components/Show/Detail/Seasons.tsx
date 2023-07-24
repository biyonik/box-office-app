import { Season } from '../../../models/IShow';
import formatToDDMMYYYY from '../../../helpers/dateFormatter';
import styled from 'styled-components';

interface IProps {
  seasons: Season[];
}

const showPremieredDateFormatted = (premiered: string) => {
  if (!premiered) {
    return 'N/A';
  }
  return formatToDDMMYYYY(premiered);
};

const SeasonsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;

const SeasonList = styled.div`
  display: flex;
  flex-direction: column;

  .season-item {
    display: flex;
    align-items: center;
    margin: 10px 0;

    &:last-child {
      margin-bottom: 0;
    }

    .left {
      flex: 0 0 30%;
      border-right: 1px solid #b0b0b0;
      padding-right: 20px;
    }

    .right {
      padding-left: 20px;
      flex: 1;
    }
  }
`;

export default function Seasons({ seasons }: React.FC<IProps>) {
  return (
    <SeasonsWrapper>
      <p>Seasons in total: {seasons.length}</p>
      <p>Episodes in total: {seasons.reduce((sum: number, season: Season) => sum + season.episodeOrder, 0)}</p>
      <SeasonList>
        {seasons.length > 0 &&
          seasons.map((season: Season) => (
            <div key={season.id} className="season-item">
              <div className="left">
                <p>Season {season.number}</p>
                <p>Episodes: {season.episodeOrder}</p>
              </div>
              <div className="right">
                <p>Air Date: {showPremieredDateFormatted(season.premiereDate)}</p>
              </div>
            </div>
          ))}
      </SeasonList>
    </SeasonsWrapper>
  );
}
