interface ITabs {
  id: number;
  url: string;
  name: string;
}

export const tabs: ITabs[] = [
  {
    id: 0,
    url: 'tricks',
    name: 'tricks'
  },
  {
    id: 1,
    url: 'challenges',
    name: 'challenges'
  }
];
