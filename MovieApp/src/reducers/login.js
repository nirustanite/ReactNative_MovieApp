import { AUTH_TOKEN, LOGOUT} from '../actions/authactions';


const inittialstate = null;

export default (state = inittialstate, action) => {
    switch (action.type) {
      case AUTH_TOKEN:
        return action.payload;
      case LOGOUT:
         return action.payload
      default:
        return state;
    }
};