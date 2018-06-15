import { combineReducers } from 'redux';
import gagReducer from './gag_reducer'

const rootReducer = combineReducers({
  initReducer: gagReducer
});

export default rootReducer;
