import React, { useState, useEffect } from 'react';

import './Home.css';

const Home = () => {
  // An array of different greetings in various languages
  const helloTexts = ['HELLO!', 'HOLA!', 'BONJOUR!', 'CIAO!', 'HALLO!', 'NAMASTE!', 'KONNICHIWA!', 'OLÁ!', 'ZDRAS-TVUY-TE!'];

  // State to keep track of the current index of the greeting to display
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect to run a function after the component has been rendered
  useEffect(() => {
    // Set up an interval to change the greeting every 2 seconds
    const intervalId = setInterval(() => {
      // Change the index to the next one in a cyclic manner
      setCurrentIndex((prevIndex) => (prevIndex + 1) % helloTexts.length);
    }, 2000);

    // Clear the interval on component unmount to avoid memory leaks
    return () => clearInterval(intervalId);
  }, []); // The empty dependency array means this effect runs once after the initial render

  // JSX to render the component
  return (
    <div className="home" >
      <div className="left">
        {/* Display the current greeting using the currentIndex */}
        <h4 className="text-wrapper">
          <span className='hello'>{helloTexts[currentIndex]}</span>
        </h4>
        <h1>Hi, It's Me</h1>
        <h2>I'm <span className="highlighted-text">Jai Sachdeva</span></h2>

        <p>
          A second-year student at Dalhousie University, I'm immersing myself
          in the world of Computer Science. Explore the blend of academia and
          passion, where textbooks meet hands-on curiosity.
        </p>
      </div>
      
  

      <div className="right">
        <h1></h1>
        <img src="./images/j__1_-removebg-preview.png" alt='Logo'/>
      </div>
    </div>
  );
};

export default Home;
