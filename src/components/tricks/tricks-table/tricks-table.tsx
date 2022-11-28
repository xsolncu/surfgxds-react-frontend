import type { FC } from 'react';
import type { ITrick } from '#/types/tricks';
import type { TricksStore } from '#/pages/tricks/tricks.store';
import { observer } from 'mobx-react-lite';
import './tricks-table.scss';

interface ITricksTable {
  pageStore: TricksStore;
}

const TricksTable: FC<ITricksTable> = ({ pageStore }) => {
  const { filteredTricks: tricks } = pageStore.state;

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
          {tricks.map((trick) => (
            <TrickRow key={trick.id} {...trick} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default observer(TricksTable);

const TrickRow: FC<ITrick> = (props) => {
  const { points, name } = props;

  return (
    <div className="trickMain">
      <div className="trick-item">
        <div className="points">
          <div className="points-num">
            <div className="span">{points}</div>
          </div>
        </div>
        <div className="name">{name}</div>
        <div className="time">10.9</div>
        <div className="speed">1530</div>
        <div className="completes">2411</div>
        <div className="length">4</div>
        <div className="index">| 14</div>
      </div>
    </div>
  );
};
