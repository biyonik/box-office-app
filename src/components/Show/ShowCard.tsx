import { IShow } from '../../models/IShow';
import formatToDDMMYYYY from '../../helpers/dateFormatter.js';
import onlyTenWords from '../../helpers/stringFormatted';
import { Link } from 'react-router-dom';

interface IProps {
  show: IShow;
}

const showPremieredAsFormatted = (premiered: string) => {
  if (!premiered) {
    return 'N/A';
  }
  return formatToDDMMYYYY(premiered);
};

export default function ShowCard({ show }: React.FC<IProps>) {
  return (
    <div>
      {show.image ? (
        <img src={show.image.medium} alt="Show Poster" />
      ) : (
        <img src="../../public/image_not_found.png" height={128} alt={show.name} />
      )}
      <h2>{show.name}</h2>
      <p>Premiered {showPremieredAsFormatted(show.premiered)}</p>
      <p>Rating {show.rating.average ?? 'not available'}</p>
      <p>Genres: {show.genres?.join(', ') ?? ''}</p>
      <p>Summary: {onlyTenWords(show.summary)}</p>
      <div>
        <Link to={`/show/${show.id}`}>Read more</Link>
        <button type={'button'}>Star me</button>
      </div>
    </div>
  );
}
