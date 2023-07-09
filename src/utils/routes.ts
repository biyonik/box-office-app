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
    to: '/starred',
    text: 'Starred',
  },
];
