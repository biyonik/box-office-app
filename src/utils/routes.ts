export interface IRoute {
  readonly to: string;
  readonly text: string;
}

export const ROUTES: IRoute[] = [
  {
    to: '/',
    text: 'Home',
  },
  {
    to: '/movies',
    text: 'Movies',
  },
  {
    to: '/starred',
    text: 'Starred',
  }
]
