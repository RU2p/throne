import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'c7b14fb256mshea3c6bd4f0ff483p1f5ceajsnc98e3faad5d1',
    },
  });
    
  return data;
}