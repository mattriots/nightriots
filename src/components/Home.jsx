import React from 'react';
import logo from '../assets/Logo.png';
import nsom_cover from '../assets/nsom_cover.jpg';
import title_name from '../assets/title_name.png';

const Home = () => {
   return (
      <div name="home" className="w-full h-screen bg-main z-0">
         <div className="w-full h-full backdrop-brightness-75">
            <div className="flex justify-center items-center pt-14">
               <div className="md:w-1/2 px-9 ">
                  <img
                     src={logo}
                     alt="Logo"
                     className="pt-10 block object-cover w-l object-center"
                  />
                  <img
                     src={nsom_cover}
                     alt="Cover"
                     className="pt-10 block object-cover w-l object-center"
                  />
                  <img
                     src={title_name}
                     alt="Title"
                     className="pt-10 block object-cover w-l object-center"
                  />
                  <h1 className="pt-7 font-medium text-4xl text-center text-white leading-18">
                     OUT NOW
                  </h1>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;
