import React from 'react';
import './fonts/FuturaPTBook.ttf';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Videos from './components/Videos';
import Music from './components/Music';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
   return (
      <div>
         <Navbar />
         <Home />
         <Music />
         <Videos />
      </div>
   );
};

export default App;
