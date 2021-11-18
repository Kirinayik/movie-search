import {call, put, takeLatest} from "redux-saga/effects";
import {getMoviesSearchAction, MOVIES_SEARCH_REQUEST} from "./searchMovies.actions";

export const API_KEY = "44fdd1155b4c53983e30b1f7090adf5d";

function fetchMovieSearch(sort) {
  return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${sort}&page=1`)
    .then((response) => response.json())
}

function* getMoviesSearch({sort}) {
  const movies = yield call(fetchMovieSearch, sort)
  
  yield put(getMoviesSearchAction(movies))
}

export function* watcherSearchMovies() {
  yield takeLatest(MOVIES_SEARCH_REQUEST, getMoviesSearch)
}