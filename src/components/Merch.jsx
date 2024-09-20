import React from 'react';
import roaring from '../assets/into_the_roaring.jpg';
import younglore from '../assets/young_lore.jpg';
import lostboys from '../assets/lost_boys.jpg';
import sumerian from '../assets/sumerian_logo.avif';

const Merch = () => {
   return (
      <div name="merch" className="backdrop-brightness-75">
         <h1 className="pt-2 font-medium text-4xl text-center text-white leading-18">MERCH</h1>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-1 pt-5 px-10 md:gap-4 ">
            <a href="https://wearepk.bandcamp.com/album/into-the-roaring">
               <img src={roaring} alt="Into the Roaring" className="p-2 w-full max-w-sm" />
            </a>
            <a href="https://wearepk.bandcamp.com/album/the-lost-boys-sessions-ep">
               <img src={lostboys} alt="Lost Boys" className="p-2 w-full max-w-sm" />
            </a>

            <a href="https://nightriots.bandcamp.com/album/young-lore">
               <img src={younglore} alt="Young Lore" className="p-2 w-full max-w-sm" />
            </a>

            <div className="flex items-center ">
               <a href="https://sumerianrecords.com/collections/night-riots">
                  <img src={sumerian} alt="Sumerian Records" className="p-2 w-full max-w-sm" />
               </a>
            </div>
         </div>
      </div>
   );
};

//text-[#1d63b0]

export default Merch;
