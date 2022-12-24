import { env } from 'process';
import axios from 'axios';

const { ODDS_API } = env;

const request = axios.create({
  baseURL: ODDS_API_BASE_URL,
  params: {
    API_KEY: ODDS_API,
  },
});
