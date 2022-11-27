import React from 'react';
import './FilterWindow.scss';
import MultiRangeSlider from './RangeSlider/MultiRangeSlider';

const FilterWindow = () => {
  return (
    <div className="filter-window-main">
      <div className="filter-window-main-content">
        <span className="filter-window-main-content-logo">filters</span>
      </div>
      <div className="filter-window-content">
        <span className="filter-window-points">points</span>
        <MultiRangeSlider
          min={0}
          max={1000}
          onChange={({ min, max }: { min: number; max: number }) =>
            console.log(`min = ${min}, max = ${max}`)
          }
        />
      </div>
    </div>
  );
};

export default FilterWindow;
