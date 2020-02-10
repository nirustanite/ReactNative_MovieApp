import { ERR_AUTH_TOKEN } from '../actions/authactions';

export default (state = null, action) => {
  switch (action.type) {
    case ERR_AUTH_TOKEN:
      return action.payload;
    default:
      return state;
  }
};