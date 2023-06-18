import React, { useState } from 'react';

function DayNight() {
  const [isDay, setIsDay] = useState(true);

  const toggleBackground = () => {
    setIsDay(!isDay);
  };

  return (
    <div>
      <button id="bgButton" onClick={toggleBackground}>
        {isDay ? (
          <i className="fas fa-sun"></i>
        ) : (
          <i className="fas fa-moon"></i>
        )}
      </button>
      <style>{`
        body {
          background-image: url(${
            isDay ? './assets/light.jpg' : './assets/dark.jpg'
          });
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
      `}</style>
    </div>
  );
}

export default DayNight;
