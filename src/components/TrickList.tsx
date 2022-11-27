import type { FC } from 'react';
import React from 'react';
import type { IPeople } from '../types/types';
import './TrickList.css';

const TrickList: FC<IPeople> = (props) => {
  const { name, height, mass, gender } = props;
  return (
    <div className="trickMain">
      <div className="trick-item">
        <div className="points">
          <div className="points-num">
            <div className="span">1500</div>
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
