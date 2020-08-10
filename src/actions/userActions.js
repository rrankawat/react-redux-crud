import { GET_USERS, USERS_ERROR, ADD_USER } from '../actions/types';
import axios from 'axios';

// Get users
export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get('/users');

    dispatch({ type: GET_USERS, payload: res.data });
  } catch (err) {
    dispatch({ type: USERS_ERROR, payload: err.response.data });
  }
};

// Add user
export const addUser = (user) => async (dispatch) => {
  try {
    const res = await axios.post('/users', user);

    dispatch({ type: ADD_USER, payload: res.data });
  } catch (err) {
    dispatch({ type: USERS_ERROR, payload: err.response.data });
  }
};
