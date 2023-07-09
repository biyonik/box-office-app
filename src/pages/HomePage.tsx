import { useState } from 'react';
import { IMovie } from '../models/IMovie';
import { MovieService } from '../services/movie.service';
import { SearchOption } from '../constants/SearchOption';
import { PeopleService } from '../services/people.service';
import { IPeople } from '../models/IPeople';
import SearchForm from '../components/Home/SearchForm';

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
      <SearchForm
        handleSearchMovieSubmit={handleSearchMovieSubmit}
        handleRadioChange={handleRadioChange}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        searchOption={searchOption}
        SHOWS={SHOWS}
        PEOPLE={PEOPLE}
      />
      <div>{searchOption === SHOWS ? renderMovieCards() : renderActorCards()}</div>
    </div>
  );
}
