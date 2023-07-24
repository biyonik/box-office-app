import { SearchOption } from '../../constants/SearchOption';
import React from 'react';
import CustomRadio from '../Controls/CustomRadio';
import styled from 'styled-components';

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
      <SearchInput
        type="text"
        placeholder="Search for a movie, tv show, person..."
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
      />

      <RadiosWrapper>
        <CustomRadio
          label={'Shows'}
          type="radio"
          name="search-option"
          value={SHOWS}
          onChange={handleRadioChange}
          checked={searchOption.valueOf() === SHOWS}
        />

        <CustomRadio
          label={'Actors'}
          type="radio"
          name="search-option"
          value={PEOPLE}
          onChange={handleRadioChange}
          checked={searchOption.valueOf() === PEOPLE}
        />
      </RadiosWrapper>

      <SearchButtonWrapper>
        <button disabled={!searchTerm || searchTerm.length < 2}>
          <span>Search</span>
        </button>
      </SearchButtonWrapper>
    </form>
  );
}

const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;

  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;

  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;

    &:hover {
      cursor: pointer;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;
