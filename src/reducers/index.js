import { combineReducers } from 'redux';
import CryptoReducer from './CryptoReducer.js'

const rootReducer = combineReducers({
  crypto: CryptoReducer
});

export default rootReducer;
