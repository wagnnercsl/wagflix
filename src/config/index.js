const BASE_URL = window.location.origin.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://wagflix.herokuapp.com';

export default {
  BASE_URL,
};
