import {
  DATA_REQUEST,
  GET_CONFIG,
  GET_GENRES_MOVIES,
  GET_GENRES_SERIALS,
  GET_MOVIES,
  GET_SERIALS,
} from "./data.actions";

const initialState = {
  movies: {},
  genresMovies: [],
  genresSerials: [],
  config: null,
  serials: {},
  isLoading: false,
  error: false,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_REQUEST:
      return { ...state, isLoading: true };
    case GET_MOVIES:
      return { ...state, movies: action.payload };
    case GET_GENRES_MOVIES:
      return { ...state, genresMovies: action.payload.genres };
    case GET_GENRES_SERIALS:
      return { ...state, genresSerials: action.payload.genres };
    case GET_CONFIG:
      return { ...state, config: action.payload };
    case GET_SERIALS:
      return { ...state, serials: action.payload };

    default:
      return state;
  }
};