import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.API_URL || 'api/v1/',
  timeout: 2000
});

export default instance;
