import { action, makeObservable, observable } from 'mobx';

export interface ITrick {
  id: number;
  name: string;
  point: number;
  velocity: number;
  date_add: string;
  author_id: number;
  map_id: number;
}

interface IAboutStoreState {
  filteredTricks: ITrick[];
}

export class AboutStore {
  tricks: ITrick[] = [];

  state = {
    filteredTricks: []
  } as IAboutStoreState;

  constructor() {
    makeObservable(this.state, {
      filteredTricks: observable
    });

    makeObservable(this, {
      setFilterdTricks: action
    });
  }

  setFilterdTricks = (tricks: ITrick[]): ITrick[] => (this.state.filteredTricks = tricks);

  loadTricksAsync = async () => {
    // const { data } = await axios.get<ITrick[]>('https://swapi.dev/api/people/');
    const data = await new Promise((r) =>
      r(
        [...new Array(10)].map((_, key) => ({
          id: key,
          name: 'name',
          time: 'time',
          speed: 'speed',
          completes: 'completes',
          length: 'length',
          index: 'index',
          point: Math.floor(Math.random() * 1000)
        }))
      )
    );

    this.tricks = data as ITrick[];
    this.setFilterdTricks(data as ITrick[]);
  };

  filteringTricks = (filters: any) => {
    const { range } = filters;

    const filteredTricks = this.tricks.filter((f) => f.point > range.min && f.point < range.max);

    this.setFilterdTricks(filteredTricks);
  };
}
