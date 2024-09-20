import React, { useEffect, useState } from 'react';
import logo from '../assets/Logo.png';
import nsom_cover from '../assets/nsom_cover.jpg';
import title_name from '../assets/title_name.png';
import SpotifyData from './SpotifyData';

const Home = () => {
   const data = SpotifyData();

   useEffect(() => {
      let tracks = data?.tracks;
      tracks?.forEach((track) => {
         console.log(track.name);
      });
   }, [data]);

   return (
      <div name="home" className="backdrop-brightness-75 pt-[80px]">
         <div className="flex justify-center items-center">
            <div className="md:w-1/2 px-9 grid place-items-center">
               <img src={logo} alt="Logo" className="pt-10" />
               <img src={nsom_cover} alt="Cover" className="pt-10" />
               <img src={title_name} alt="Title" className="pt-10" />
               <h1 className="pt-2 font-medium text-4xl text-center text-white leading-18">
                  OUT NOW
               </h1>

               {/* This checks if data is available and then displays it */}
               {data && (
                  <div>
                     <h1 className="pt-7 font-medium text-4xl text-center text-white leading-18">
                        {}
                     </h1>
                     <h1 className="pt-7 font-medium text-4xl text-center text-white leading-18">
                        {}
                     </h1>
                     <h1 className="pt-7 font-medium text-4xl text-center text-white leading-18">
                        {}
                     </h1>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export default Home;
