import { useState, useEffect } from 'react';
import axios from 'axios';

const SpotifyData = () => {
   // Here we made a request to the Spotify API to get the artist data
   // Then we return it and any of the components can grab it
   // BUT what if we want to grab more information from the API?
   // Should we do each call in a seperate component?

   const [data, setData] = useState(null);

   useEffect(() => {
      const fetchData = async () => {
         const client_id = '9bc1f164ab034b23a00d47bfa402fe1f';
         const client_secret = 'affce514d9de471881c53ce04aee6722';

         console.log(client_id, client_secret);

         //Fetch Access Token
         const tokenResponse = await axios.post(
            'https://accounts.spotify.com/api/token',
            'grant_type=client_credentials',
            {
               headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                  Authorization: `Basic ${btoa(`${client_id}:${client_secret}`)}`,
               },
            }
         );

         const accessToken = tokenResponse.data.access_token;

         //Fetch Data

         const userResponse = await axios.get(
            'https://api.spotify.com/v1/artists/67Dg546QfThu4PuanvFD8y/top-tracks?market=US ',
            {
               headers: {
                  Authorization: `Bearer ${accessToken}`,
               },
            }
         );

         console.log(userResponse.data);

         setData(userResponse.data);
      };

      fetchData();
   }, []);

   return data;
};

export default SpotifyData;
