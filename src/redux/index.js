import { createStore } from 'redux';
import { isServer } from '../helpers';
import reducer from './reducer';

const STORE = '__REDUX_STORE__';

const initStore = initialState => createStore(reducer, initialState);

export default function(initialState) {
  if (isServer() || typeof window === 'undefined') {
    return initStore(initialState);
  }

  if (!window[STORE]) window[STORE] = initStore(initialState);
  return window[STORE];
}
