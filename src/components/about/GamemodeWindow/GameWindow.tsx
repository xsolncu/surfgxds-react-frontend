import React from 'react';
import './GameWindow.scss';

const GameWindow = () => {
  return (
    <div className="game-window-main">
      <div className="game-window-main-content">
        <span className="game-window-main-content-logo">mods</span>
      </div>
      <div className="game-window-nav">
        <li className="game-window-nav-item">list</li>
        <li className="game-window-nav-item">creator</li>
        <li className="game-window-nav-item">suggested</li>
      </div>
    </div>
  );
};

export default GameWindow;
