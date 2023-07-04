import React from 'react';

function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <a onClick={() => scrollToSection('homes')}>HOME</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('skills')}>Skills</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('experience')}>EXPERIENCE</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('projects')}>PROJECTS</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('contact')}>CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
