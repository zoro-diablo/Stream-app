import axios from 'axios';
import { useQuery } from 'react-query';

const options = {
  method: 'GET',
  url: 'https://movies-api14.p.rapidapi.com/movies',
  headers: {
    'X-RapidAPI-Key': 'd5ac398defmsh55062f5a3532541p113e13jsnefef60d65f97',
    'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com',
  },
};

const fetchAllData = () => {
  return axios.request(options);
};

export const useFetchMov = () => {
  return useQuery('fetchData', fetchAllData);
};
