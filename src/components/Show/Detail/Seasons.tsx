import { Season } from '../../../models/IShow';
import formatToDDMMYYYY from '../../../helpers/dateFormatter';

interface IProps {
  seasons: Season[];
}

const showPremieredDateFormatted = (premiered: string) => {
  if (!premiered) {
    return 'N/A';
  }
  return formatToDDMMYYYY(premiered);
};

export default function Seasons({ seasons }: React.FC<IProps>) {
  return (
    <>
      <div>
        <p>Seasons in total: {seasons.length}</p>
        <p>Episodes in total: {seasons.reduce((sum: number, season: Season) => sum + season.episodeOrder, 0)}</p>
      </div>
      <div>
        {seasons.length > 0 && (
          <ul>
            {seasons.map((season: Season) => (
              <li key={season.id}>
                <div>
                  <p>Season {season.number}</p>
                  <p>Episodes: {season.episodeOrder}</p>
                  <p>Air Date: {showPremieredDateFormatted(season.premiereDate)}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
