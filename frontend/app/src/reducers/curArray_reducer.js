import { NEW_ARRAY } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case NEW_ARRAY:
      return action.payload;
    default:
      return state;
  }
}
