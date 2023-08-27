import React from 'react';
import './fonts/FuturaPTBook.ttf';
import Home from './components/Home';

const App = () => {
   return (
      <div className="bg-main bg-cover bg-no-repeat bg-center h-screen">
         <div className="w-full h-full backdrop-brightness-75">
            <Home />
         </div>
      </div>
   );
};

export default App;
