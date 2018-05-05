import axios from 'axios';
import qs from 'qs';
import {replace} from 'react-router-redux';
import 'babel-polyfill'

const API_URL = '/api/v1/questions';

const startRequest = () => ({
  type: 'START_REQUEST',
  payload: {},
});

const receiveData = (error, response) => ({
  type: 'RECEIVE_DATA',
  payload: {error, response}
});

const finishRequest = () => ({
  type: 'FINISH_REQUEST',
  payload: {},
});

export const toCreate = (questionData) => {
  return async (dispatch, getState) => {
    axios.defaults.headers['X-CSRF-TOKEN'] = document.getElementsByName('csrf-token')[0].content;
    try {
      await axios
        .post(`${API_URL}`,{question: questionData})
        .then(results => {
          dispatch(receiveData(null, results.data));
          location.href = `/question/${results.data.question.id}/edit`
        });
    } catch (err) {
      dispatch(receiveData(err));
    }

    dispatch(finishRequest());
  }
};
