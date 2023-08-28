import React from 'react';
import './fonts/FuturaPTBook.ttf';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Videos from './components/Videos';

const App = () => {
   return (
      <div>
         <Navbar />
         <Home />
         <Videos />
      </div>
   );
};

export default App;
