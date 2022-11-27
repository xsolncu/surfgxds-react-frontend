import React, { useEffect, useMemo } from 'react';
import Header from './header/Header';
import TrickTable from './TrickTable';
import GameWindow from '../components/about/GamemodeWindow/GameWindow';
import FilterWindow from '../components/about/FilterWindow/FilterWindow';
import { AboutStore } from './About.store';
import './About.scss';

const About = () => {
  const store = useMemo(() => new AboutStore(), []);

  const { loadTricksAsync, filteringTricks } = store;

  useEffect(() => {
    loadTricksAsync();
  }, []);

  return (
    <div>
      <Header />
      <FilterWindow filteringTricks={filteringTricks} />
      <GameWindow />

      <div className="about-wrap">
        <TrickTable store={store} />
      </div>
    </div>
  );
};

export default About;
