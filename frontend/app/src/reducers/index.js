import { combineReducers } from 'redux';
import dataReducer from './data_reducer';
import curArrayReducer from './curArray_reducer';
import answersReducer from './answer_reducers';

const rootReducer = combineReducers({
  dataReducer: dataReducer,
  curArray: curArrayReducer,
  answers: answersReducer
});

export default rootReducer;
