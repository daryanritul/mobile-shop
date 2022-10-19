import axios from 'axios';
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_DETAILS_RESET,
} from '../constants/userConstants';

export const login = (email, password) => async dispatch => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      header: {
        'Content-type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/users/signin/',
      {
        email: email,
        password: password,
      },
      config
    );
    console.log('success');
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const submitForm = (subject, body) => async dispatch => {
  const config = {
    header: {
      'Content-type': 'application/json',
    },
  };
  try {
    await axios.post(
      '/api/contactus',
      {
        subject: subject,
        body: body,
      },
      config
    );
  } catch {
    console.log('Error!');
  }
  console.log('success');
};

export const logout = () => async dispatch => {
  localStorage.removeItem('userInfo');

  dispatch({
    type: USER_LOGOUT,
  });
  dispatch({
    type: USER_DETAILS_RESET,
  });
};

export const register = (name, email, password) => async dispatch => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      header: {
        'Content-type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/users/signup/',
      {
        email: email,
        password: password,
        name: name,
      },
      config
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
