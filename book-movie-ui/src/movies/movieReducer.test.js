import { movieReducer } from './movieReducer';
import { fetchMoviesInProgress, movieDataFetched, movieDataFetchFailure } from './movieActions';

const apiData = [{
  id: 1,
  name: 'Kabali',
  experiences: 'RDX, Dolby Atmos, SUB',
  listingType: 'NOW_SHOWING',
  slug: 'kabali',
},
{
  id: 2,
  name: 'Sultan',
  experiences: 'RDX, Dolby Atmos, SUB',
  listingType: 'NOW_SHOWING',
  slug: 'sultan',
},
];

describe('Movie Reducer', () => {
  it('Should return initial state', () => {
    expect(movieReducer(undefined, {})).toEqual({
      movies: [],
      fetching: false,
    });
  });

  it('Should return fetching as true state', () => {
    expect(movieReducer(undefined, fetchMoviesInProgress)).toEqual({
      movies: [],
      fetching: true,
    });
  });

  it('Should return fetching as false', () => {
    expect(movieReducer({ movies: [], fetching: true }, movieDataFetchFailure)).toEqual({
      movies: [],
      fetching: false,
      error: true,
    });
  });

  it('Should return movies data and set fetching to false', () => {
    expect(movieReducer({ movies: [], fetching: true }, movieDataFetched(apiData))).toEqual({
      movies: apiData,
      fetching: false,
    });
  });
});
