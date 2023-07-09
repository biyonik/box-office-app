import { useState } from 'react';
import { IMovie } from '../models/IMovie';
import { MovieService } from '../services/movie.service';
import { SearchOption } from '../constants/SearchOption';
import { PeopleService } from '../services/people.service';
import { IPeople } from '../models/IPeople';

export default function HomePage() {
  const { SHOWS, PEOPLE } = SearchOption;
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchOption, setSearchOption] = useState<SearchOption>(SHOWS);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [people, setPeople] = useState<IPeople[]>([]);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchOption(value as SearchOption);
  };

  const handleSearchMovieSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchOption === SHOWS) {
      const data = await MovieService.getMovieBySearch(searchTerm);
      setMovies(data);
    } else if (searchOption === PEOPLE) {
      const data = await PeopleService.getPeopleBySearch(searchTerm);
      setPeople(data);
    }
  };

  const renderMovieCards = () => {
    if (!movies.length) {
      return <div>No movies found</div>;
    }
    return movies.map((movie: IMovie) => {
      return (
        <div key={movie.show?.id}>
          <h3>{movie.show?.name}</h3>
          {movie.show?.image?.medium ? (
            <img src={movie.show?.image?.medium} alt={movie.show?.name} />
          ) : (
            <span>Image not found for this movie</span>
          )}
        </div>
      );
    });
  };

  const renderActorCards = () => {
    if (!people.length) {
      return <div>No actors found</div>;
    }
    return people.map((person: IPeople) => {
      return (
        <div key={`${person?.person?.id}`}>
          <h3>{person?.person?.name}</h3>
          {person?.person?.image?.medium ? (
            <img src={person?.person?.image?.medium} alt={person?.person?.name} />
          ) : (
            <span>Image not found for this actor</span>
          )}
        </div>
      );
    });
  };

  return (
    <div>
      <h3>Home Page</h3>
      <form onSubmit={handleSearchMovieSubmit}>
        <input
          type="text"
          placeholder="Search for a movie"
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
        />
        <label>
          Shows
          <input
            type="radio"
            name="search-option"
            value={SHOWS}
            checked={searchOption.valueOf() === SHOWS}
            onChange={handleRadioChange}
          />
        </label>

        <label>
          Actors
          <input
            type="radio"
            name="search-option"
            value={PEOPLE}
            checked={searchOption.valueOf() === PEOPLE}
            onChange={handleRadioChange}
          />
        </label>
        <button disabled={!searchTerm || searchTerm.length < 2}>
          <span>Search</span>
        </button>
      </form>
      <div>{searchOption === SHOWS ? renderMovieCards() : renderActorCards()}</div>
    </div>
  );
}
