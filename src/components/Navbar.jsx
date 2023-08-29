import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import symbol from '../assets/symbol.png';

const Navbar = () => {
   const [nav, setNav] = useState(false);
   const handleClick = () => setNav(!nav);
   return (
      <div
         name="navbar"
         className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-transparent text-gray-950 shadow-lg z-10">
         <div>
            <img src={symbol} alt="symbol" className="w-[50px]" />
         </div>
         {/* Menu */}
         <ul className="hidden md:flex ">
            <li className="hover:text-white duration-300">
               <Link to="home" smooth={true} duration={500}>
                  Home
               </Link>
            </li>
            <li className="hover:text-white duration-300">
               <Link to="music" smooth={true} duration={500}>
                  Music
               </Link>
            </li>
            <li className="hover:text-white duration-300">
               <Link to="videos" smooth={true} duration={500}>
                  Videos
               </Link>
            </li>
            <li className="hover:text-white duration-300">Merch</li>
            <li className="hover:text-white duration-300">Contact</li>
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
            <li className="py-6 text-4xl">Home</li>
            <li className="py-6 text-4xl">Music</li>
            <li className="py-6 text-4xl">Video</li>
            <li className="py-6 text-4xl">Merch</li>
            <li className="py-6 text-4xl">Contact</li>
         </ul>
      </div>
   );
};

export default Navbar;
