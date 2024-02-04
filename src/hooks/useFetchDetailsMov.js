import axios from 'axios';
import { useQuery } from 'react-query';

const fetchAllData = async ({ videoId }) => {
  const options = {
    method: 'GET',
    url: `https://movies-api14.p.rapidapi.com/movie/${videoId}`,
    headers: {
      'X-RapidAPI-Key': 'd5ac398defmsh55062f5a3532541p113e13jsnefef60d65f97',
      'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
    }
  };

  const response = await axios.request(options);
  return response.data;
};

export const useFetchDetailsMov = (videoId) => {
  return useQuery(['fetchData', videoId], () => fetchAllData({ videoId }));
};
