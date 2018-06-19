import axios from 'axios';
import changeCase from 'change-case';
import slug from 'slug';
import filterUrl from './urlFilter';

export const FETCH_MOVIES_PROGRESS = 'FETCH_MOVIES_PROGRESS';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const fetchMoviesInProgress = {
  type: FETCH_MOVIES_PROGRESS,
};

export const movieDataFetched = data => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: data,
});

export const movieDataFetchFailure = {
  type: FETCH_MOVIES_FAILURE,
};

const fetchMovies = () => async (dispatch, getState) => {
  dispatch(fetchMoviesInProgress);
  try {
    const url = filterUrl(getState);
    const movies = await axios.get(url);
    const moviesData = movies.data.map((movie) => {
      const sluggedData = slug(changeCase.sentenceCase(movie.name), { lower: true });
      return { ...movie, slug: sluggedData };
    });
    dispatch(movieDataFetched(moviesData));
  } catch (error) {
    dispatch(movieDataFetchFailure);
  }
};

export default fetchMovies;
