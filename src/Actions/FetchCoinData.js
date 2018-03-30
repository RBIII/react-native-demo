import axios from 'axios';
import { apiBaseUrl } from './../utils/Constants';
import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL
} from './../utils/ActionTypes';

export default function FetchCoinData() {
  return dispatch => {
    dispatch({ type: FETCHING_COIN_DATA })
    console.log("baseUrl: " + apiBaseUrl)
    return axios.get(`${apiBaseUrl}/v1/ticker/?limit=10`)
      .then(result => {
        dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: result.data })
      })
      .catch(error => {
        console.log(error)
        dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: error.data })
      });
  }
}
