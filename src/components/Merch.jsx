import React from 'react';
import roaring from '../assets/into_the_roaring.jpg';
import younglore from '../assets/young_lore.jpg';
import lostboys from '../assets/lost_boys.jpg';
import sumerian from '../assets/sumerian_logo.avif';

const Merch = () => {
   return (
      <div name="merch" className="backdrop-brightness-75">
         {/* <h1 className="text-[#ef392c] text-5xl text-center pt-20">Merch</h1> */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-20 px-10">
            <div className="grid grid-cols-2 gap-1 justify-center">
               <a href="https://wearepk.bandcamp.com/album/into-the-roaring">
                  <img src={roaring} alt="Into the Roaring" className="p-2 w-full max-w-sm" />
               </a>
               <a href="https://wearepk.bandcamp.com/album/the-lost-boys-sessions-ep">
                  <img src={lostboys} alt="Lost Boys" className="p-2 w-full max-w-sm" />
               </a>
               <div className="grid col-span-2 px-10 justify-center  ">
                  <a href="https://nightriots.bandcamp.com/album/young-lore">
                     <img src={younglore} alt="Young Lore" className="p-2 w-full max-w-sm" />
                  </a>
               </div>
            </div>
            <div className="flex items-center ">
               <a href="https://sumerianrecords.com/collections/night-riots">
                  <img src={sumerian} alt="Sumerian Records" className="" />
               </a>
            </div>
         </div>
      </div>
   );
};

//text-[#1d63b0]

export default Merch;
