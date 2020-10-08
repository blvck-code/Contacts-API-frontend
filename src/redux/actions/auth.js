import axios from 'axios';
import {REGISTER_LOADING,USER_LOADING, USER_LOADED, AUTH_ERROR, REGISTER_SUCCESS, REGISTER_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS} from '../../constants/types'
import { CONNECTION_ERROR } from './api';

const baseURL = process.env.REACT_APP_BACKEND_URL;


//Register

export const register = ({
        username, 
        firstName : first_name, 
        lastName : last_name, 
        email, 
        password
    }) => ( dispatch ) => {
    dispatch({type: REGISTER_LOADING})
    
    axios
        .post(`${baseURL}/api/auth/register`, {username, first_name, last_name, email, password})
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: REGISTER_ERROR,
                payload: err.response ? err.response.data : CONNECTION_ERROR
            })
        })   
}

// Login

export const login = ({
        username, 
        password
    }) => ( dispatch ) => {
    dispatch({type: LOGIN_LOADING})
    
    axios
        .post(`${baseURL}/api/auth/login`, {username, password})
        .then(res => {
            localStorage.token = res.data.token;
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: LOGIN_ERROR,
                payload: err.response ? err.response.data : CONNECTION_ERROR

            })
        })   
}

// User
export const getUser = () => (dispatch, getState) => {
    
    dispatch({type: USER_LOADING})
    axios
        .get(`${baseURL}/api/auth/user`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: AUTH_ERROR
            })
        })
}

export const logout = () => (dispatch, getState) => {
    axios
        .post(`${baseURL}/api/logout`, null, tokenConfig(getState))
        .then(dispatch({type: LOGOUT_SUCCESS}))
        .catch(err => console.log(err));
}

// Helper function
export const tokenConfig = (getState) => {
    // Get token
    const token = localStorage.token;
  
    // Add
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    // Add token to config
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  
    return config;
  };