import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ShowService } from '../services/show.service';
import { Show } from '../models/IShow';
import Main from '../components/Show/Detail/Main';
import SubInfo from '../components/Show/Detail/SubInfo';
import Seasons from '../components/Show/Detail/Seasons';
import Casts from '../components/Show/Detail/Casts';

export default function ShowDetail() {
  const { id } = useParams();
  const { data, error, isLoading, isError } = useQuery(['show', { id }], () => ShowService.getShowById(id), {
    refetchOnWindowFocus: false,
  });
  const show = data as Show;

  return isLoading ? (
    <div>Loading...</div>
  ) : isError ? (
    <div>Error: {error?.message}</div>
  ) : (
    <div>
      <h3>Show Detail</h3>
      <Main name={show.name} image={show.image} summary={show.summary} genres={show.genres} />
      <div>
        <h2>Details</h2>
        <SubInfo
          language={show.language}
          rating={show.rating}
          runtime={show.runtime}
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
      </div>
      <div>
        <h2>Season</h2>
        <Seasons seasons={show._embedded.seasons} />
      </div>
      <div>
        <h2>Casts</h2>
        <Casts casts={show._embedded.cast} />
      </div>
    </div>
  );
}
