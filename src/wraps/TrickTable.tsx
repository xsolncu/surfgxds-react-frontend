import React from 'react';
import Tricks from '../types/types';
import './TrickTable.scss';

const TrickTable = () => {
  return (
    <main>
      <div className="tricks-table">
        <div className="tricks-header">
          <div className="points">POINTS</div>
          <div className="name">NAME</div>
          <div className="time">TIME</div>
          <div className="speed">SPEED</div>
          <div className="completes">COMPLETES</div>
          <div className="length">LENGTH</div>
          <div className="index">#</div>
          <span className="best">BEST</span>
        </div>
        <div className="tricks-list">
          <Tricks />
        </div>
      </div>
    </main>
  );
};

export default TrickTable;
