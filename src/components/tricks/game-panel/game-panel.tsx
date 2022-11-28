import './game-panel.scss';

const GamePanel = () => {
  return (
    <div className="game-panel-main">
      <div className="game-panel-main-content">
        <span className="game-panel-main-content-logo">mods</span>
      </div>
      <div className="game-panel-nav">
        <li className="game-panel-nav-item">list</li>
        <li className="game-panel-nav-item">creator</li>
        <li className="game-panel-nav-item">suggested</li>
      </div>
    </div>
  );
};

export default GamePanel;
