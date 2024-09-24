import React from 'react';

const Videos = () => {
   return (
      <div>
         <div name="videos" className="">
            <h1 className="pt-10 font-medium text-4xl text-center text-white leading-18">VIDEOS</h1>
            <div className="flex justify-center items-center pt-5 pb-20">
               <div className="mx-auto px-10 pb-10 flex flex-col justify-center w-full h-full">
                  <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4">
                     <iframe
                        className="w-full h-48 md:h-96 max-w-2xl mx-auto"
                        loading="lazy"
                        src="https://www.youtube.com/embed/Z9uk16bTZOs?si=fckeDmx7pr8pYiUI"
                        title="Tokyo Diamond Eyes"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                     <iframe
                        className="w-full h-48 md:h-96 max-w-2xl mx-auto"
                        loading="lazy"
                        src="https://www.youtube.com/embed/LMIRrDhk5Pg?si=5SVnSZC4aDW5uJAU"
                        title="Contagious"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                     <iframe
                        className="w-full h-48 md:h-96 md:max-w-2xl mx-auto"
                        loading="lazy"
                        src="https://www.youtube.com/embed/2pEY2JxT-4g?si=P1Y-oToAHJaJv3LT"
                        title="Breaking Free"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                     <iframe
                        className="w-full h-48 md:h-96 max-w-2xl mx-auto"
                        loading="lazy"
                        src="https://www.youtube.com/embed/r9UZZ_3QgyE?si=XEwkk6NDkcCM2Qtx"
                        title="Tour Footage"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Videos;
