import {all, call, put, takeLatest} from 'redux-saga/effects';
import {API_KEY, BASE_URL, language} from '../../../services/api';
import {
  DATA_REQUEST,
  getCertificationMoviesAction,
  getCertificationSerialsAction,
  getConfigAction,
  getGenresMoviesAction,
  getGenresSerialsAction,
} from './data.actions';

function fetchGenres(product) {
  return fetch(
    `${BASE_URL}genre/${product}/list?api_key=${API_KEY}${language}`,
  ).then((response) => response.json());
}

function fetchConfig() {
  return fetch(`${BASE_URL}configuration?api_key=${API_KEY}`).then((response) =>
    response.json(),
  );
}

function fetchCertification(product) {
  return fetch(`${BASE_URL}certification/${product}/list?api_key=${API_KEY}`).then(
    (response) => response.json(),
  );
}

function* getMoviesGenre() {
  const genres = yield call(fetchGenres, 'movie');

  yield put(getGenresMoviesAction(genres));
}

function* getSerialsGenre() {
  const genres = yield call(fetchGenres, 'tv');

  yield put(getGenresSerialsAction(genres));
}

function* getConfig() {
  const config = yield call(fetchConfig);

  yield put(getConfigAction(config));
}

function* getCertificationMovies() {
  const certification = yield call(fetchCertification, 'movie');

  yield put(getCertificationMoviesAction(certification));
}

function* getCertificationSerials() {
  const certification = yield call(fetchCertification, 'tv');

  yield put(getCertificationSerialsAction(certification));
}

export function* watcherData() {
  yield all([
    takeLatest(DATA_REQUEST, getMoviesGenre),
    takeLatest(DATA_REQUEST, getSerialsGenre),
    takeLatest(DATA_REQUEST, getConfig),
    takeLatest(DATA_REQUEST, getCertificationMovies),
    takeLatest(DATA_REQUEST, getCertificationSerials),
  ]);
}
