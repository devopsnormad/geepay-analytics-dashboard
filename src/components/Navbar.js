// Updated Navbar.js

import React, { useState } from 'react';
import './Navbar.css';
import profilePic from '../images/profile-pic.jpg';
import bellIcon from '../images/solar_bell-outline.svg';
import dataIcon from '../images/solar_calendar-linear.svg';
import arrowDownIcon from '../images/Arrow - Down 2.svg';
import CalendarComponent from '../components/Calender';

import { toggleUserDropdown, handleDropdownItemClick } from './userDropdown';

const Navbar = ({ darkMode }) => {
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleCalendar = () => {
    setCalendarVisible(!isCalendarVisible);
  };

  const handleDateSelection = (date) => {
    setCurrentDate(date);
    setCalendarVisible(false);
  };

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(currentDate);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`navbar-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className='nav-items'>
        <h1>Dashboard</h1>
        <div className={`navMenu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          {/* Hamburger Icon for Mobile */}
          <div className='hamburger-icon' onClick={toggleMobileMenu}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
          </div>

          {/* Items for Big Screens */}
          {!isMobileMenuOpen && (
            <>
              {/* Search Bar */}
              <input
                type='text'
                className='search-bar'
                placeholder='Search'
              />

              {/* Date Info */}
              <div className='date-info'>
                <img src={dataIcon} alt='' onClick={toggleCalendar} />
                <h3 className='text-date'>{formattedDate}</h3>
                {isCalendarVisible && (
                  <div className='calendar-dropdown'>
                    <CalendarComponent onSelectDate={handleDateSelection} />
                  </div>
                )}
              </div>

              {/* Notification Bell */}
              <div className='notification-bell'>
                <img src={bellIcon} alt='' />
              </div>

              {/* User Dropdown */}
              <div className='dropdown' id='Dropdown'>
                <button className='dropbtn' onClick={toggleUserDropdown}>
                  <img src={profilePic} alt='' className='profile-picture' />
                  <div>
                    <h3 className='text-user'>Justin Bergson</h3>
                    <span className='text-email'>justin@gmail.com</span>
                  </div>
                  <img src={arrowDownIcon} alt='' className='arrow-icon' />
                </button>
                <div className='dropdown-item' id='Dropdown'>
                  <div className='dropdown-content'>
                    <p className='user-content'>Profile</p>
                    <p className='user-content'>Settings</p>
                    <p className='user-content'>Logout</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className='mobile-menu'>
              <div className='mobile-menu-item'>
                <img src={dataIcon} alt='' onClick={toggleCalendar} />
              </div>
              <div className='mobile-menu-item'>
                <img src={bellIcon} alt='' className='notification-bell' />
              </div>
              <div className='mobile-menu-item'>
                <input type='text' className='search-bar' placeholder='Search' />
              </div>
              <div className='mobile-menu-item'>
                <img src={profilePic} alt='' className='profile-picture' />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
