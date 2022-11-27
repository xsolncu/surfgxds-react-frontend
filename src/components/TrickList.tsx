import type { FC } from 'react';
import type { ITrick } from '../wraps/About.store';
import React from 'react';
import './TrickList.css';

interface ITrickList {
  trick: ITrick;
}

const TrickList: FC<ITrickList> = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { point } = props.trick;

  return (
    <div className="trickMain">
      <div className="trick-item">
        <div className="points">
          <div className="points-num">
            <div className="span">{point}</div>
          </div>
        </div>
        <div className="name">Artem Pidor</div>
        <div className="time">10.9</div>
        <div className="speed">1530</div>
        <div className="completes">2411</div>
        <div className="length">4</div>
        <div className="index">| 14</div>
      </div>
    </div>
  );
};

export default TrickList;
