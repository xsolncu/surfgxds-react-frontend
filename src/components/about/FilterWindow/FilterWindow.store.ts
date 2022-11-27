import { action, makeObservable, observable } from 'mobx';

export type IFilteringTricks = (filters: any) => void;

export type IRange = {
  min: number;
  max: number;
};

interface IFilterWindowStoreState {
  range: IRange;
}

export class FilterWindowStore {
  filteringTricks: IFilteringTricks;

  state = {
    range: {
      min: 0,
      max: 1000
    }
  } as IFilterWindowStoreState;

  constructor(filteringTricks: IFilteringTricks) {
    this.filteringTricks = filteringTricks;

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
