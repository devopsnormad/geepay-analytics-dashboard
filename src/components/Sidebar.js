import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import Logo from '../images/logo.svg';
import Icon1 from '../images/dashboard.png';
import Icon2 from '../images/trend-up.svg';
import Icon3 from '../images/profile-2user.svg';
import Icon4 from '../images/box.svg';
import Icon5 from '../images/discount-shape.svg';
import Icon6 from '../images/info-circle.svg';
import Icon7 from '../images/brightness 1.svg';
import Icon8 from '../images/moon 1.svg';
import Icon9 from '../images/arrow-right.svg';
import Icon10 from '../images/setting-2.svg';
import Icon11 from '../images/logout.svg';

const menuIcons = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6];
const middleIcons = [Icon7, Icon8];
const bottomMenuIcons = [Icon9, Icon10, Icon11];

const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeIconIndex, setActiveIconIndex] = useState(0);

  const toggleMode = (index) => {
    if ((darkMode && index === 1) || (!darkMode && index === 0)) {
      return;
    }
    setDarkMode((prevMode) => !prevMode);
    setActiveIconIndex(index);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const mainMenuLi = document.getElementById('mainMenu').querySelectorAll('li');

    function changeActive() {
      mainMenuLi.forEach((n) => n.classList.remove('active'));
      this.classList.add('active');
    }

    mainMenuLi.forEach((n) => n.addEventListener('click', changeActive));

    return () => {
      mainMenuLi.forEach((n) => n.removeEventListener('click', changeActive));
    };
  }, []);

  return (
    <div className={`sidebar-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <img src={Logo} alt='' />
      <ul id='mainMenu'>
        {menuIcons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </ul>

      <div className='middle-menu'>
        <ul className='middleMenu'>
          {middleIcons.map((icon, index) => (
            <Icon
              key={index}
              icon={icon}
              index={index}
              toggleMode={index === 0 || index === 1 ? () => toggleMode(index) : undefined}
              isActive={index === activeIconIndex}
            />
          ))}
        </ul>
      </div>

      <ul className='bottomMenu'>
        {bottomMenuIcons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </ul>
    </div>
  );
};

const Icon = ({ icon, index, toggleMode, isActive }) => (
  <li className={`icon ${isActive ? 'active icon7' : ''}`} onClick={toggleMode}>
    <a href="#" className={isActive ? 'icon7' : ''}>
      <img src={icon} alt='Icon' />
    </a>
  </li>
);

export default Sidebar;
