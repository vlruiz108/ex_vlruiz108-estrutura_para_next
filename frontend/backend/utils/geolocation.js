import axios from 'axios';

export const getGeolocation = async (address: string) => {
  const apiKey = 'YOUR_OPENCAGE_API_KEY';
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${address}&key=${apiKey}`;
  
  const response = await axios.get(url);
  return response.data.results[0].geometry;
};
