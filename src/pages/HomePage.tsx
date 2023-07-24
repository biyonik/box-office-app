import { useEffect, useState } from 'react';
import { SearchOption } from '../constants/SearchOption';
import { IShow } from '../models/IShow';
import { IPeople } from '../models/IPeople';
import { ShowService } from '../services/show.service';
import { PeopleService } from '../services/people.service';
import SearchForm from '../components/Home/SearchForm';
import ShowGrid from '../components/Show/ShowGrid';
import PeopleGrid from '../components/People/PeopleGrid';
import { useSearchTerm } from '../hooks/useSearchTerm';
import { TextCenter } from '../components/Common/TextCenter';

export default function HomePage() {
  const { SHOWS, PEOPLE } = SearchOption;
  const [searchTerm, setSearchTerm] = useSearchTerm();
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

  useEffect(() => {
    if (!searchTerm) {
      if (searchOption === SHOWS) {
        setShows([]);
      } else if (searchOption === PEOPLE) {
        setPeople([]);
      }
    }
  }, [searchTerm]);

  const renderShowCards = () => {
    if (!shows.length) {
      return <TextCenter>No shows found</TextCenter>;
    }
    return <ShowGrid shows={shows} />;
  };

  const renderActorCards = () => {
    if (!people.length) {
      return <TextCenter>No actors found</TextCenter>;
    }
    return <PeopleGrid people={people} />;
  };

  return (
    <div>
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
