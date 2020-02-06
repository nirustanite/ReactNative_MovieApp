import { AUTH_TOKEN, FB_LOGOUT} from '../actions/authactions';

const inittialstate = null;

export default (state = inittialstate, action) => {
    switch (action.type) {
      case AUTH_TOKEN:
        return action.token;
      case FB_LOGOUT:
        return inittialstate
      default:
        return state;
    }
};