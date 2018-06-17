import { USER_ANSWER } from '../actions';

export default function(state = [], action) {

  switch (action.type) {
    case USER_ANSWER:
      return [action.payload, ...state]
    default: return state
  }

}
