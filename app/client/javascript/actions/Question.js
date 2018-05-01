import fetchJsonp from 'fetch-jsonp';
import qs from 'qs';
import {replace} from 'react-router-redux';
import 'babel-polyfill'

const API_URL = 'https://shopping.yahooapis.jp/ShoppingWebService/V1/json/categoryRanking';
const APP_ID = 'dj00aiZpPTJSZzVmRTVwMWs1YyZzPWNvbnN1bWVyc2VjcmV0Jng9YmU-';

const startRequest = category => ({
  type: 'START_REQUEST',
  payload: {category},
});

const receiveData = (category, error, response) => ({
  type: 'RECEIVE_DATA',
  payload: {category, error, response}
});

const finishRequest = category => ({
  type: 'FINISH_REQUEST',
  payload: {category},
});

// containersから呼び出される
export const fetchRanking = categoryId => {
  return async (dispatch, getState) => {
    const categories = getState().shopping.categories;
    const category = categories.find(category => (category.id === categoryId));

    if (typeof category === 'undefined') {
      dispatch(replace('/'));
      return;
    }

    // dispatchによって、reducers/Questionを呼び出す
    // startRequestはstateのrankingを初期化するだけ
    dispatch(startRequest(category));

    const queryString = qs.stringify({
      appid: APP_ID,
      category_id: categoryId,
    });

    try {
      const response = await fetchJsonp(`${API_URL}?${queryString}`);
      const data = await response.json();
      // 受け取ったjsonをstateに当てる
      dispatch(receiveData(category, null, data));
    } catch (err) {
      dispatch(receiveData(category, err));
    }

    dispatch(finishRequest(category));
  }
};
