import type { FC } from 'react';
import type { AboutStore } from './About.store';
import TrickList from '../components/TrickList';
import './TrickTable.scss';
import { observer } from 'mobx-react-lite';

interface ITrickTable {
  store: AboutStore;
}

const TrickTable: FC<ITrickTable> = (props) => {
  const { store } = props;

  const { state } = store;

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
          {state.filteredTricks.map((trick) => (
            <TrickList key={trick.id} trick={trick} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default observer(TrickTable);
