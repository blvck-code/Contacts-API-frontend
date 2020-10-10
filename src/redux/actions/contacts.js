import axios from "axios";
import {
  CONTACTS_LOAD_ERROR,
  CONTACTS_LOADING,
  CONTACTS_LOAD_SUCCESS,
  ADD_CONTACT_LOAD,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_ERROR,
} from "../../constants/types";
import { CONNECTION_ERROR } from "./api";
import { tokenConfig } from "./auth";

const baseURL = process.env.REACT_APP_BACKEND_URL;

export const fetchContacts = () => (dispatch, getState) => {
  dispatch({ type: CONTACTS_LOADING });
  axios
    .get(`${baseURL}/api/contacts/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: CONTACTS_LOAD_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: CONTACTS_LOAD_ERROR,
        payload: err.response ? err.response.data : CONNECTION_ERROR,
      });
    });
};

export const createContact = ({
  firstName: first_name,
  lastName: last_name,
  countryCode: country_code,
  phoneNumber: phone_number,
  contactPic: contact_pic,
}) => (dispatch, getState) => {
  dispatch({
    type: ADD_CONTACT_LOAD,
  });

  const body = {
    first_name,
    last_name,
    country_code,
    phone_number,
    contact_pic,
  };

  console.log("body", body);

  axios
    .post(`${baseURL}/api/contacts/`, body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADD_CONTACT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ADD_CONTACT_ERROR,
        payload: err.response.data,
      });
    });
};
