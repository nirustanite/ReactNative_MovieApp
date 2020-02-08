import { SEARCH_LIST } from '../actions/movieactions';

export default (state = [], action) => {
    switch (action.type) {
      case SEARCH_LIST:
        return action.payload.data
      default:
        return state;
    }
};