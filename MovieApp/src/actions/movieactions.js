export const MOVIE_LIST = "MOVIE_LIST";

export const getMovieList = () => ({
  apiCall: true,
  path: '/movies',
  successType: MOVIE_LIST
});