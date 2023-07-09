import { useState } from 'react';
import { IMovie } from '../models/IMovie';
import { MovieService } from '../services/movie.service';

export default function HomePage() {
  const [searchedMovie, setSearchedMovie] = useState<string>('');
  const [movies, setMovies] = useState<IMovie[]>([]);

  const handleSearchMovieSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const moviesFromService = await MovieService.getMovieBySearch(searchedMovie);
    setMovies(moviesFromService);
  }

  const renderMovieCards = () => {
    if (!movies.length) {
      return <div>No movies found</div>
    }
    return movies.map((movie: IMovie) => {
      return (
        <div key={movie.show?.id}>
          <h3>{movie.show?.name}</h3>
          {
            movie.show?.image?.medium ? (
              <img src={movie.show?.image?.medium} alt={movie.show?.name} />
            ): (
              <span>Image not found for this movie</span>
            )
          }
        </div>
      )
    });
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
      <div>
        {renderMovieCards()}
      </div>
    </div>
  );
}
