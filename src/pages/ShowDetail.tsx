import { useParams } from 'react-router-dom';
import { useShowById } from '../hooks/useShowById';

export default function ShowDetail() {
  const { id } = useParams();
  const { show, loading } = useShowById(id);

  console.log(show);
  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h3>Show Detail</h3>
      <div>
        <img src={show.image?.medium} alt={show.name} />
      </div>
      <div>
        <h3>{show.name}</h3>
        <div dangerouslySetInnerHTML={{ __html: show.summary }} />
      </div>
      <div>
        <h4>Genres</h4>
        <ul>
          {show.genres?.map(genre => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Language</h4>
        <p>{show.language}</p>
      </div>
      <div>
        <h4>Rating</h4>
        <p>{show.rating?.average}</p>
      </div>
      <div>
        <h4>Runtime</h4>
        <p>{show.runtime}</p>
      </div>
    </div>
  );
}
