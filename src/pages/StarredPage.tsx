import { useStarredShows } from '../hooks/useStarredShows';
import { useQuery } from '@tanstack/react-query';
import { ShowService } from '../services/show.service';
import ShowGrid from '../components/Show/ShowGrid';

export default function StarredPage() {
  const [starredShowsIds] = useStarredShows();
  const {
    data: starredShows,
    error,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: () => ShowService.getShowsByIds(starredShowsIds).then(shows => shows.map(show => ({ show }))),
    refetchOnWindowFocus: false,
  });

  return (
    <div>
      <h3>Starred Page</h3>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error occurred: {error}</div>}
      {starredShows && <ShowGrid shows={starredShows} />}
    </div>
  );
}
