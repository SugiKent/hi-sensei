import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {routerReducer,routerMiddleware} from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';

import * as reducers from './reducers';

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      ...reducers,
      router: routerReducer,
      form: reduxFormReducer,
    }),
    applyMiddleware(
      logger,
      thunk,
      routerMiddleware(history)
    )
  )
}
