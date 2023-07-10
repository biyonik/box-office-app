import { useStarredShows } from '../hooks/useStarredShows';

export default function StarredPage() {
  const [starredShows, _] = useStarredShows();

  return (
    <div>
      <h3>Starred Page</h3>
    </div>
  );
}
