import { useStarredShows } from '../hooks/useStarredShows';
import { useQuery } from '@tanstack/react-query';
import { ShowService } from '../services/show.service';
import ShowGrid from '../components/Show/ShowGrid';
import { TextCenter } from '../components/Common/TextCenter';

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
      {isLoading && <TextCenter>Loading...</TextCenter>}
      {error && <TextCenter>Error occurred: {error}</TextCenter>}
      {starredShows && starredShows.length > 0 ? (
        <ShowGrid shows={starredShows} />
      ) : (
        <TextCenter>Starred shows not found</TextCenter>
      )}
    </div>
  );
}
