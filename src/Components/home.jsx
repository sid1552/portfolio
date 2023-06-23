import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Home() {
  const [text] = useTypewriter({
    words: ['am a Web-Developer', 'love software development'],
    loop: {},
    typeSpeed: 125,
    deleteSpeed: 70,
  });

  return (
    <div className="home">
      <div>
        <h1>Hi , my name is Siddharth</h1>
      </div>
      <div>
        {' '}
        <h1>
          I <span style={{ color: '#40B8B6' }}>{text}</span>
          <Cursor />
        </h1>
      </div>
      <div className="bio">
        I am Siddharth Singh, a dedicated and ambitious Computer Science
        undergraduate. Currently pursuing my Bachelor of Technology degree, I am
        passionate about web development
      </div>
    </div>
  );
}

export default Home;
