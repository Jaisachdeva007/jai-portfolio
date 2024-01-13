// Example in App.jsx
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';


const App = () => {
  return (
    <div>
     { <Navbar />}
      { <Sidebar /> }
      { <Home />  }
      { <About />}
      { <Portfolio />}
      
    </div>
  );
};

export default App;
