import { useState } from 'react';
import { MovieService } from '../services/movie.service';
import { IMovie } from '../models/IMovie';

export default function HomePage() {
  const [searchedMovie, setSearchedMovie] = useState<string>('');
  const [movies, setMovies] = useState<IMovie[]>([]);

  const handleSearchMovieSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const moviesFromService = await MovieService.getMovieBySearch(searchedMovie);
    setMovies(moviesFromService);
  }

  return (
    <div>
      <h3>Home Page</h3>
      <form onSubmit={handleSearchMovieSubmit}>
        <input
          type='text'
          placeholder='Search for a movie'
          value={searchedMovie}
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => setSearchedMovie(e.target.value)}
        />
        <button
          disabled={!searchedMovie || searchedMovie.length < 3}
        >
          <span>Search</span>
        </button>
      </form>
    </div>
  );
}
