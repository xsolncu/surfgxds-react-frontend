import cn from 'classnames';
import React, { useState } from 'react';
import './Header.scss';
import { tabs } from './helpers';

const Header = () => {
  const [isOpen, setIsOpen] = useState<number>(0);

  return (
    <div className="header__main">
      <div className="header__content">
        <div className="header-polosa" />
        <div className="header__nav">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setIsOpen(tab.id)}
              className={cn('trick-nav-item', { active: isOpen === tab.id })}>
              {tab.name}
            </div>
          ))}
          <div className={cn('trick-nav-item')}>rankings</div>
        </div>
        <div className="header__logo">Surfgxds</div>
        <div className="header__nav2">
          <div className="trick-nav-item">
            <span className="span">Tutorials</span>
          </div>
          <div className="trick-nav-item">News</div>
          <div className="trick-nav-item">Faq</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
