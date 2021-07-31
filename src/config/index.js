// eslint-disable-next-line
let baseURL, captchaSiteKey;

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3001/api';
  captchaSiteKey = '6Lfb_88bAAAAAOKvnf55nxS2eAKFxlkHym-fRfiD';
} else {
  baseURL = 'https://pool-api-mobile.herokuapp.com/api';
  captchaSiteKey = '6Lfb_88bAAAAAOKvnf55nxS2eAKFxlkHym-fRfiD';
}

export { baseURL, captchaSiteKey };
