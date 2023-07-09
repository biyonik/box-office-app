export interface IShow {
  score: number;
  show: Show;
}

interface Show {
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
  webChannel?: null | string;
  dvdCountry?: null | string;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: Links;
}

interface Schedule {
  time: string;
  days: string[];
}

interface Rating {
  average: number;
}

interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite: string;
}

interface Country {
  name: string;
  code: string;
  timezone: string;
}

interface Externals {
  tvrage: number;
  thetvdb: number;
  imdb: string;
}

interface Image {
  medium: string;
  original: string;
}

interface Links {
  self: Self;
  previousepisode: Previousepisode;
}

interface Self {
  href: string;
}

interface Previousepisode {
  href: string;
}
