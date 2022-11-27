import type { FC } from 'react';
import type { IRange, IFilteringTricks } from './FilterWindow.store';
import { FilterWindowStore } from './FilterWindow.store';
import MultiRangeSlider from './RangeSlider/MultiRangeSlider';
import { useMemo } from 'react';
import './FilterWindow.scss';

interface IFilterWindow {
  filteringTricks: IFilteringTricks;
}

const FilterWindow: FC<IFilterWindow> = (props) => {
  const { filteringTricks } = props;
  const store = useMemo(() => new FilterWindowStore(filteringTricks), []);

  const { state, setRange } = store;
  const { range } = state;

  return (
    <div className="filter-window-main">
      <div className="filter-window-main-content">
        <span className="filter-window-main-content-logo">filters</span>
      </div>
      <div className="filter-window-content">
        <span className="filter-window-points">points</span>
        <MultiRangeSlider {...range} onChange={(value: IRange) => setRange(value)} />
      </div>
    </div>
  );
};

export default FilterWindow;
