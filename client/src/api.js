// client/src/api.js
import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:5000',  // Make sure Flask is running on this
});
