import axios from 'axios';
import { useQuery } from 'react-query';

const fetchAllData = async ({ videoId }) => {
  const options = {
    method: 'GET',
    url: `https://movies-api14.p.rapidapi.com/movie/${videoId}`,
    headers: {
      'X-RapidAPI-Key': 'bb435cecc7msh5e15930da96ba0ep1d7249jsnbe1b75ade199',
      'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
    }
  };

  const response = await axios.request(options);
  return response.data;
};

export const useFetchDetailsMov = (videoId) => {
  return useQuery(['fetchData', videoId], () => fetchAllData({ videoId }));
};
