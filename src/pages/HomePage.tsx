import { useState } from 'react';
import { SearchOption } from '../constants/SearchOption';
import { IShow } from '../models/IShow';
import { IPeople } from '../models/IPeople';
import { ShowService } from '../services/show.service';
import { PeopleService } from '../services/people.service';
import SearchForm from '../components/Home/SearchForm';
import ShowGrid from '../components/Show/ShowGrid';
import PeopleGrid from '../components/People/PeopleGrid';

export default function HomePage() {
  const { SHOWS, PEOPLE } = SearchOption;
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchOption, setSearchOption] = useState<SearchOption>(SHOWS);
  const [shows, setShows] = useState<IShow[]>([]);
  const [people, setPeople] = useState<IPeople[]>([]);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchOption(value as SearchOption);
    shows.length ? setShows([]) : false;
    people.length ? setPeople([]) : false;
  };

  const handleSearchMovieSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchOption === SHOWS) {
      const data = await ShowService.getShowBySearch(searchTerm);
      setShows(data);
    } else if (searchOption === PEOPLE) {
      const data = await PeopleService.getPeopleBySearch(searchTerm);
      setPeople(data);
    }
  };

  const renderShowCards = () => {
    if (!shows.length) {
      return <div>No shows found</div>;
    }
    return <ShowGrid shows={shows} />;
  };

  const renderActorCards = () => {
    if (!people.length) {
      return <div>No actors found</div>;
    }
    return <PeopleGrid people={people} />;
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
      <div>{searchOption === SHOWS ? renderShowCards() : renderActorCards()}</div>
    </div>
  );
}
