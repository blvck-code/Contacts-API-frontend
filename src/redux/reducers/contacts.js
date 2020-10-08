import React from 'react';
import { CONTACTS_LOAD_ERROR, CONTACTS_LOADING, CONTACTS_LOAD_SUCCESS, LOGOUT_SUCCESS, ADD_CONTACT_LOAD, ADD_CONTACT_SUCCESS, ADD_CONTACT_ERROR, CLEAR_ADD_CONTACT } from '../../constants/types';

const initialState = {
        contacts: {
            loading: false,
            contacts: [],
            error: null
        },
        addContact: {
            loading: false,
            data: null,
            error: null
        }
}

export default function (state = initialState, {type, payload}) {
    switch(type) {
        case CONTACTS_LOADING:
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    loading: true
                }
            }
        case CONTACTS_LOAD_SUCCESS:
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    loading: false,
                    contacts: payload,
                }
            }
        case CONTACTS_LOAD_ERROR:
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    loading: false,
                    error: payload
                }
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                contacts: {
                    loading: false,
                    contacts: [],
                    error: null
                },
                addContact: {
                    loading: false,
                    contact: null,
                    error: null
                }
            }
        case ADD_CONTACT_LOAD:
            return{
                ...state,
                addContact: {
                    ...state.addContact,
                    loading: true,
                    error: null
                }
            }
        case ADD_CONTACT_ERROR:
            return {
                ...state,
                addContact: {
                    ...state.addContact,
                    loading: false,
                    error: payload
                }
            }
        case ADD_CONTACT_SUCCESS:
            return {
                ...state,
                addContact: {
                    ...state.addContact,
                    loading: false,
                    data: payload
                },
                contacts: {
                    ...state.contacts,
                    loading: false,
                    data: [payload, ...state.contacts.data]
                }
            }
        case CLEAR_ADD_CONTACT:
            return{
                ...state,
                addContact: {
                    ...state.addContact,
                    loading: false,
                    error: null,
                    data: null
                }
            }
        default:
            return state;
    }
}
