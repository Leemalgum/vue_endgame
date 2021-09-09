import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

function registerUser(userData) {
  // const url = 'http://localhost:3000/signup'; //api endpoint
  // return axios.post(url, userData);
  return instance.post('signup', userData);
}

export { registerUser };
