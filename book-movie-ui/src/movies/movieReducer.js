import { FETCH_MOVIES_FAILURE, FETCH_MOVIES_PROGRESS, FETCH_MOVIES_SUCCESS } from './movieActions';

const initialState = {
  movies: [],
  fetching: false,
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_PROGRESS:
      return { ...state, fetching: true };
    case FETCH_MOVIES_SUCCESS:
      return { ...state, fetching: false, movies: action.payload };
    case FETCH_MOVIES_FAILURE:
      return { ...state, fetching: false, error: true };
    default:
      return state;
  }
};

