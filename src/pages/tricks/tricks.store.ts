import type { IFilters } from '#/components/tricks/filters/filters.store';
import type { ITrick } from '#/types/tricks';
import { action, makeObservable, observable } from 'mobx';

interface ITricksStoreState {
  filteredTricks: ITrick[];
}

export class TricksStore {
  tricks: ITrick[] = [];

  state = {
    filteredTricks: []
  } as ITricksStoreState;

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
          points: Math.floor(Math.random() * 1000)
        }))
      )
    );

    this.tricks = data as ITrick[];
    this.setFilterdTricks(data as ITrick[]);
  };

  filteringTricks = (filters: IFilters) => {
    const { range } = filters;

    const filteredTricks = this.tricks.filter((f) => f.points > range.min && f.points < range.max);

    this.setFilterdTricks(filteredTricks);
  };
}
