import { AUTH_TOKEN, LOGOUT } from '../actions/authactions';

export default (state = null, action) => {
  switch (action.type) {
    case AUTH_TOKEN:
      return action.payload;
    case LOGOUT:
      return action.payload
    default:
      return state;
  }
};