export const MOVIE_LIST = 'MOVIE_LIST';
export const SEARCH_LIST = 'SEARCH_LIST';


// action to get the list of movies
export const getMovieList = () => ({
  apiCall: true,
  path: '/movies',
  successType: MOVIE_LIST
});


// action to get the search list based on search text
export const getSearchList = (searchtext) => ({
  apiCall: true,
  path: `/movies?filter=${searchtext}`,
  successType: SEARCH_LIST
})