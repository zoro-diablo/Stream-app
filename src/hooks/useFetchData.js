import axios from 'axios';
import { useQuery } from 'react-query';

const options = {
  method: 'GET',
  url: 'https://movies-api14.p.rapidapi.com/shows',
  headers: {
    'X-RapidAPI-Key': '393a88181amshf4a1b68d5daa7c5p147908jsnc7f458530d22',
    'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
  }
};

const fetchAllData = () => {
  return axios.request(options);
};

export const useFetchData = () => {
  return useQuery('fetchData', fetchAllData);
};
