import React from 'react';
import roaring from '../assets/into_the_roaring.jpg';
import nsom_cover from '../assets/nsom_cover.jpg';

const Merch = () => {
   return (
      <div name="merch" className="backdrop-brightness-75">
         {/* <h1 className="text-[#ef392c] text-5xl text-center pt-20">Merch</h1> */}
         <div className="flex justify-center items-center py-40">
            <a href="https://wearepk.bandcamp.com/album/into-the-roaring">
               <img
                  src={roaring}
                  alt="Merch Image"
                  className="p-2 block object-cover w-s object-center"
               />
            </a>
            <a href="https://wearepk.bandcamp.com/album/into-the-roaring">
               <img
                  src={roaring}
                  alt="Merch Image"
                  className="p-2 block object-cover w-s object-center"
               />
            </a>
            <a href="https://wearepk.bandcamp.com/album/into-the-roaring">
               <img
                  src={roaring}
                  alt="Merch Image"
                  className="p-2 block object-cover w-s object-center"
               />
            </a>
         </div>
      </div>
   );
};

//text-[#1d63b0]

export default Merch;
