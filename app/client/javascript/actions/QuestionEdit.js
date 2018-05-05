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

// containersから呼び出される
export const fetchQuestion = (questionId) => {
  return async (dispatch, getState) => {

    // dispatchによって、reducers/Questionを呼び出す
    // startRequestはstateのrankingを初期化するだけ
    dispatch(startRequest());

    try {
      await axios
        .get(`${API_URL}/${questionId}`)
        .then(results => {
          console.log(results);
          dispatch(receiveData(null, results.data));
        });
    } catch (err) {
      dispatch(receiveData(err));
    }

    dispatch(finishRequest());
  }
};

export const updateQuestion = (questionData, questionId) => {
  return async (dispatch, getState) => {
    axios.defaults.headers['X-CSRF-TOKEN'] = document.getElementsByName('csrf-token')[0].content;
    try {
      await axios
        .patch(`${API_URL}/${questionId}`,{question: questionData})
        .then(results => {
          console.log(results);
          dispatch(receiveData(null, results.data));
        });
    } catch (err) {
      dispatch(receiveData(err));
    }

    dispatch(finishRequest());
  }
};

export const removeContent = (questionId, contentIndex) => {
  return async (dispatch, getState) => {
    axios.defaults.headers['X-CSRF-TOKEN'] = document.getElementsByName('csrf-token')[0].content;

    const url = '/api/v1/question_contents';

    try {
      await axios
        .delete(`${url}/${questionId}`,{params: {contentIndex: contentIndex}})
        .then(results => {
          console.log(results);
          dispatch(receiveData(null, results.data));
        });
    } catch (err) {
      dispatch(receiveData(err));
    }

    dispatch(finishRequest());
  }
};
