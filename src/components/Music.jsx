import React from 'react';

const Music = () => {
   return (
      <div name="music" className="w-full bg-main h-screen">
         <div className="w-full h-full backdrop-brightness-75">
            <div className="flex justify-center items-center pt-20">
               <div className="w-3/4 max-w-3xl md:w-3/5">
                  <iframe
                     className="br-8"
                     src="https://open.spotify.com/embed/artist/67Dg546QfThu4PuanvFD8y?utm_source=generator&theme=0"
                     width="100%"
                     height="352"
                     frameBorder="0"
                     allowfullscreen=""
                     allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                     loading="lazy"></iframe>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Music;
