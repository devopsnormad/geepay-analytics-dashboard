import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar'
import Main from './components/Main'

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Sidebar toggleMode={toggleMode} />
      <Main darkMode={darkMode} />
      
    </div>
  );
};

export default App;