import React from 'react';
import './fonts/FuturaPTBook.ttf';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Videos from './components/Videos';
import Music from './components/Music';
import Merch from './components/Merch';
import Contact from './components/Contact';
const App = () => {
   return (
      <div className="bg-yellowish">
         <Navbar />
         <Home />
         {/* <Music /> */}
         <Videos />
         <Merch />
         <Contact />
      </div>
   );
};

export default App;
