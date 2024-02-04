import axios from 'axios';
import { useQuery } from 'react-query';

const options = {
  method: 'GET',
  url: 'https://movies-api14.p.rapidapi.com/shows',
  headers: {
    'X-RapidAPI-Key': 'bb435cecc7msh5e15930da96ba0ep1d7249jsnbe1b75ade199',
    'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
  },
};

const fetchAllData = () => {
  return axios.request(options);
};

export const useFetchData = () => {
  return useQuery('fetchData', fetchAllData);
};
