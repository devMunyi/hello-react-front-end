import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const FETCH_GREETING = 'fetch_greeting';

// set api url
const url = 'http://localhost:3000/';

// action creator to fetch all cryptos
export const fetchGreeting = createAsyncThunk(FETCH_GREETING, async () => {
  const { data } = await axios.get(url);
  return data;
});
