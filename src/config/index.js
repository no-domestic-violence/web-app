// eslint-disable-next-line
let baseURL, captchaSiteKey;

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3001/api';
  captchaSiteKey = '6Lfbl9YbAAAAAMk1f2oxSzqsuapsrCfLp9S_LuPs';
} else {
  baseURL = 'https://pool-api-mobile.herokuapp.com/api';
  captchaSiteKey = '6Lfbl9YbAAAAAMk1f2oxSzqsuapsrCfLp9S_LuPs';
}

export { baseURL, captchaSiteKey };
