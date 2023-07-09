import { SearchOption } from '../../constants/SearchOption';
import React from 'react';

export interface IProps {
  handleSearchMovieSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchTerm: string;
  searchOption: SearchOption;
  SHOWS: SearchOption;
  PEOPLE: SearchOption;
}

export default function SearchForm({
  handleSearchMovieSubmit,
  handleRadioChange,
  setSearchTerm,
  searchTerm,
  searchOption,
  SHOWS,
  PEOPLE,
}: React.FC<IProps>) {
  return (
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
  );
}
