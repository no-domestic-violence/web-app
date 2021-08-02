/* eslint-disable no-underscore-dangle */
import createAppContext from './CreateAppContext';
import appApiClient from '../api/appApiClient';

const ACTIONS = {
  AUTH_SUCESS: 'AUTH_SUCCESS',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGOUT: 'LOGOUT',
};

const authReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        username: action.payload.username,
        id: action.payload.id,
      };
    case ACTIONS.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        username: action.payload.user.username,
        id: action.payload.user._id,
        errorMessage: '',
      };
    case ACTIONS.LOGIN_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case ACTIONS.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        token: '',
        username: '',
      };
    default:
      return state;
  }
};

const login = (dispatch) => async ({ email, password, captchaToken }) => {
  try {
    const response = await appApiClient.post('/login', {
      email,
      password,
      captchaToken,
      platform: 'web',
    });
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('username', response.data.user.username);
    localStorage.setItem('id', response.data.user._id);
    dispatch({ type: ACTIONS.LOGIN_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: ACTIONS.LOGIN_ERROR,
      payload: 'Password or email not correct.',
    });
  }
};

const authentication = (dispatch) => async () => {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  const id = localStorage.getItem('id');
  const user = { token, username, id };
  if (token) {
    dispatch({ type: ACTIONS.AUTH_SUCCESS, payload: user });
  }
};

const logout = (dispatch) => async () => {
  localStorage.clear();
  dispatch({ type: ACTIONS.LOGOUT });
};

export const { Provider, Context } = createAppContext(
  authReducer,
  {
    login,
    logout,
    authentication,
  },
  { errorMessage: '', isAuthenticated: false, user: null, token: null }
);
