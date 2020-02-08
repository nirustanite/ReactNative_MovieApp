export const MOVIE_LIST = 'MOVIE_LIST';
export const SEARCH_LIST = 'SEARCH_LIST';

export const getMovieList = () => ({
  apiCall: true,
  path: '/movies',
  successType: MOVIE_LIST
});

export const getSearchList = (searchtext) => ({
  apiCall: true,
  path:`/movies?filter=${searchtext}`,
  successType: SEARCH_LIST
})