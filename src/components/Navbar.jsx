import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import symbol from '../assets/symbol.png';
import SpotifyData from './SpotifyData';

// Made it so that a random track is displayed in the navbar from the top 10 songs
// Would be cool to make it link to something or maybe even just play that song

const Navbar = () => {
   const [nav, setNav] = useState(false);
   const handleClick = () => setNav(!nav);

   const data = SpotifyData();

   const [randomTrack, setRandomTracks] = useState(null);

   useEffect(() => {
      const getRandomTrack = (arr) => {
         const randomIndex = Math.floor(Math.random() * arr.length);
         return arr[randomIndex];
      };

      let tracks = data?.tracks;

      console.log('NAVBAR' + tracks);

      const randomTrack = getRandomTrack(tracks || []);

      console.log('TRACK' + randomTrack);

      setRandomTracks(randomTrack);
   }, [data]);

   return (
      <div
         name="navbar"
         className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-main text-gray-950 shadow-lg z-10">
         <div>
            <img src={symbol} alt="symbol" className="w-[50px]" />
            {randomTrack && (
               <div>
                  <h1>{randomTrack.name} &lt;=== Random song</h1>
                  {/* Display other properties of randomTrack here */}
               </div>
            )}
         </div>
         <div></div>

         {/* Menu */}
         <ul className="hidden md:flex ">
            <li className="hover:-translate-y-1 hover:text-white hover:scale-110 duration-300">
               <Link to="home" smooth={true} duration={500}>
                  Home
               </Link>
            </li>
            <li className="hover:-translate-y-1 hover:text-white hover:scale-110 duration-300">
               <Link to="music" smooth={true} duration={500}>
                  Music
               </Link>
            </li>
            <li className="hover:-translate-y-1 hover:text-white hover:scale-110 duration-300">
               <Link to="videos" smooth={true} duration={500}>
                  Videos
               </Link>
            </li>
            <li className="hover:-translate-y-1 hover:text-white hover:scale-110 duration-300">
               <Link to="merch" smooth={true} duration={500}>
                  Merch
               </Link>
            </li>
            <li className="hover:-translate-y-1 hover:text-white hover:scale-110 duration-300">
               <Link to="Contact" smooth={true} duration={500}>
                  Contact
               </Link>
            </li>
         </ul>
         {/* Hamburger */}
         <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? <FaBars /> : <FaTimes />}
         </div>

         {/* Mobile Menu */}

         <ul
            className={
               !nav
                  ? 'hidden'
                  : 'absolute top-0 left-0 w-full h-screen bg-main flex flex-col justify-center items-center'
            }>
            <li className="py-6 text-4xl">
               <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                  Home
               </Link>
            </li>
            <li className="py-6 text-4xl">
               <Link onClick={handleClick} to="music" smooth={true} duration={500}>
                  Music
               </Link>
            </li>
            <li className="py-6 text-4xl">
               <Link onClick={handleClick} to="videos" smooth={true} duration={500}>
                  Videos
               </Link>
            </li>
            <li className="py-6 text-4xl">Merch</li>
            <li className="py-6 text-4xl">Contact</li>
         </ul>
      </div>
   );
};

export default Navbar;
