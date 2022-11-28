import type { FC } from 'react';
import { useEffect, useMemo } from 'react';
import { TricksStore } from './tricks.store';
import TricksTable from '#/components/tricks/tricks-table/tricks-table';
import Filters from '#/components/tricks/filters/filters';
import GamePanel from '#/components/tricks/game-panel/game-panel';
import './tricks.scss';

const Tricks: FC = () => {
  const pageStore = useMemo(() => new TricksStore(), []);

  const { loadTricksAsync } = pageStore;

  useEffect(() => {
    loadTricksAsync();
  }, []);

  return (
    <section>
      <Filters pageStore={pageStore} />
      <GamePanel />

      <div className="tricks-wrap">
        <TricksTable pageStore={pageStore} />
      </div>
    </section>
  );
};

export default Tricks;
