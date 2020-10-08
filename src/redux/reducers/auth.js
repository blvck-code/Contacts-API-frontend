import React from 'react';
import { AUTH_ERROR, LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS, USER_LOADED, USER_LOADING } from '../../constants/types';

const initialState = {
    loading: false,
    data: null,
    error: null
};

export default function (state = initialState, {type, payload}) {
    switch(type) {
        case USER_LOADING:
            return {
                ...state,
                loading: true,
            }
        case USER_LOADED:
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                loading: false,
                data: payload
            }
        case REGISTER_LOADING:
        case LOGIN_LOADING:
            return{
                ...state,
                loading: true
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token)
            return {
                ...state, 
                loading: false,
                error: null,
                data: payload
            }
        case REGISTER_ERROR:
        case LOGIN_ERROR:
        case AUTH_ERROR:
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token')
            return {
                ...state,
                loading: false,
                error: payload,
                data: null
            }
        default:
            return state;
    }
}
