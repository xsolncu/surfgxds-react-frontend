import type { TricksStore } from '#/pages/tricks/tricks.store';
import { action, makeObservable, observable } from 'mobx';

export type IRange = {
  min: number;
  max: number;
};

interface IFiltersStoreState {
  range: IRange;
}

export type IFilters = IFiltersStoreState;
export type IFilteringTricks = (filters: IFilters) => void;

export class FiltersStore {
  filteringTricks: IFilteringTricks;

  state = {
    range: {
      min: 0,
      max: 1000
    }
  } as IFiltersStoreState;

  constructor(pageStore: TricksStore) {
    this.filteringTricks = pageStore.filteringTricks;

    makeObservable(this.state, {
      range: observable
    });

    makeObservable(this, {
      setRange: action
    });
  }

  setRange = (range: IRange) => {
    this.state.range = range;
    this.filteringTricks({ range });
  };
}
