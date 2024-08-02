// api.js or dataService.js

import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API}/api/data`);
    console.log(response.data);
    return response.data; // Return the fetched data if needed
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Throw the error to be handled by the caller
  }
};

export default fetchData;
