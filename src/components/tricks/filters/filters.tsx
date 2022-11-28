import type { FC } from 'react';
import type { IRange } from './filters.store';
import type { TricksStore } from '#/pages/tricks/tricks.store';
import { FiltersStore } from './filters.store';
import { useMemo } from 'react';
import RangeSlider from './range-slider/range-slider';
import './filters.scss';

interface IFilters {
  pageStore: TricksStore;
}

const Filters: FC<IFilters> = ({ pageStore }) => {
  const store = useMemo(() => new FiltersStore(pageStore), []);

  const { state, setRange } = store;
  const { range } = state;

  return (
    <div className="filter-main">
      <div className="filter-main-content">
        <span className="filter-main-content-logo">filters</span>
      </div>
      <div className="filter-content">
        <span className="filter-points">points</span>
        <RangeSlider {...range} onChange={(value: IRange) => setRange(value)} />
      </div>
    </div>
  );
};

export default Filters;
