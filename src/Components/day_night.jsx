import React, { useState, useEffect } from 'react';

const DayNight = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => {
    setIsDarkMode(!isDarkMode);

    // Remove background-image property and set background color
    if (isDarkMode) {
      document.body.style.backgroundImage = "url('./assets/light.jpg')";
      document.body.style.backgroundColor = 'transparent';
    } else {
      document.body.style.backgroundImage = 'none';
      document.body.style.backgroundColor = '#2C2F35';
    }
  };

  useEffect(() => {
    // Set initial background image and color on component mount
    document.body.style.backgroundImage = "url('./assets/light.jpg')";
    document.body.style.backgroundColor = 'transparent';
  }, []);

  return (
    <div id="bgButton" onClick={handleClick}>
      <i
        className={`fa ${isDarkMode ? 'fa-moon' : 'fa-sun'}`}
        style={{ padding: '0.5rem', fontSize: '2rem', color: '#3c8a89' }}
      />
    </div>
  );
};

export default DayNight;
