export interface IPeople {
  score: number;
  person: IPerson;
}

interface IPerson {
  id: number;
  url: string;
  name: string;
  country: Country;
  birthday: string;
  deathday: any;
  gender: string;
  image: Image;
  updated: number;
  _links: Links;
}

interface Country {
  name: string;
  code: string;
  timezone: string;
}

interface Image {
  medium: string;
  original: string;
}

interface Links {
  self: Self;
}

interface Self {
  href: string;
}
