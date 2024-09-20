import React from 'react';

const Contact = () => {
   return (
      <div name="contact" className="backdrop-brightness-75 flex justify-center pt-20 pb-20">
         {/* email address */}
         <a href="mailto:example@example.com" className="mx-4">
            Email Us{' '}
         </a>
         {/* social media links */}
         <a href="https://www.instagram.com/nightriots" className="mx-4">
            Instagram
         </a>
         <a href="https://www.youtube.com/nightriots" className="mx-4">
            YouTube
         </a>
      </div>
   );
};

export default Contact;
