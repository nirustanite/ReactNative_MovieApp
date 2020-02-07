import { AUTH_TOKEN, LOGOUT} from '../actions/authactions';


const inittialstate = null;

export default (state = inittialstate, action) => {
    switch (action.type) {
      case AUTH_TOKEN:
        console.log("token",action.token)
        return action.token;
      case LOGOUT:
        console.log("state",state)
        return inittialstate
      default:
        return state;
    }
};