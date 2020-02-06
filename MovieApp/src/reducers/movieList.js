import { MOVIE_LIST } from '../actions/movieactions';

export default (state = [], action) => {
    switch (action.type) {
      case MOVIE_LIST:
        return action.payload.data
      default:
        return state;
    }
};