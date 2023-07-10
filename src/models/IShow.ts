export interface IShow {
  score: number;
  show: Show;
}

export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  webChannel: any;
  dvdCountry: any;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: Links;
  _embedded: Embedded;
}

export interface Schedule {
  time: string;
  days: string[];
}

export interface Rating {
  average: any;
}

export interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite: string;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Externals {
  tvrage: any;
  thetvdb: number;
  imdb: string;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Links {
  self: Self;
  previousepisode: Previousepisode;
}

export interface Self {
  href: string;
}

export interface Previousepisode {
  href: string;
}

export interface Embedded {
  cast: Cast[];
  seasons: Season[];
}

export interface Cast {
  person: Person;
  character: Character;
  self: boolean;
  voice: boolean;
}

export interface Person {
  id: number;
  url: string;
  name: string;
  country: Country2;
  birthday: string;
  deathday: any;
  gender: string;
  image: Image2;
  updated: number;
  _links: Links2;
}

export interface Country2 {
  name: string;
  code: string;
  timezone: string;
}

export interface Image2 {
  medium: string;
  original: string;
}

export interface Links2 {
  self: Self2;
}

export interface Self2 {
  href: string;
}

export interface Character {
  id: number;
  url: string;
  name: string;
  image: any;
  _links: Links3;
}

export interface Links3 {
  self: Self3;
}

export interface Self3 {
  href: string;
}

export interface Season {
  id: number;
  url: string;
  number: number;
  name: string;
  episodeOrder: number;
  premiereDate: string;
  endDate: string;
  network: Network2;
  webChannel: any;
  image: any;
  summary: any;
  _links: Links4;
}

export interface Network2 {
  id: number;
  name: string;
  country: Country3;
  officialSite: string;
}

export interface Country3 {
  name: string;
  code: string;
  timezone: string;
}

export interface Links4 {
  self: Self4;
}

export interface Self4 {
  href: string;
}
