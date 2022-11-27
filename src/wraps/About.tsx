import React from 'react';
import Header from './header/Header';
import TrickTable from './TrickTable';
import './About.scss';
import GameWindow from '../components/about/GamemodeWindow/GameWindow';
import FilterWindow from '../components/about/FilterWindow/FilterWindow';

const About = () => {
  return (
    <div>
      <Header />
      <FilterWindow />
      <GameWindow />

      <div className="about-wrap">
        <TrickTable />
      </div>
    </div>
  );
};

export default About;
