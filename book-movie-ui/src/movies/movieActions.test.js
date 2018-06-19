import fetchMovies, { FETCH_MOVIES_FAILURE, FETCH_MOVIES_PROGRESS, FETCH_MOVIES_SUCCESS } from './movieActions';

import constants from '../config/constants';
import config from '../config';
import { mockStore, mock } from '../config/testSetupHelper';

let store;
const apiDataNowShowing = [{
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

const apiDataUpcoming = [
  {
    id: 1,
    name: 'P.K',
    experiences: 'RDX, Dolby Atmos, SUB',
    listingType: 'Upcoming',
    slug: 'p-k',
  },
  {
    id: 2,
    name: 'ddlj',
    experiences: 'RDX, Dolby Atmos, SUB',
    listingType: 'Upcoming',
    slug: 'ddlj',
  },
];

describe('movies/actions', () => {
  describe('movies/now-showing movies', () => {
    beforeEach(() => {
      store = mockStore({
        filterReducer: {
          selectedListingType: constants.NOW_SHOWING,
          selectedLanguage: [],
        },
      });
    });
    it('should fetch movies from server which are now-showing and return FETCH_MOVIES_SUCCESS', async () => {
      mock
        .onGet(`${config.apiUrl}/movies?listingType=${store.getState().filterReducer.selectedListingType}`)
        .reply(200, apiDataNowShowing);

      store.dispatch(fetchMovies()).then(() => {
        expect(store.getActions()[0]).toEqual({ type: FETCH_MOVIES_PROGRESS });
        expect(store.getActions()[1]).toEqual({
          type: FETCH_MOVIES_SUCCESS,
          payload: apiDataNowShowing,
        });
      });
    });

    it('should return FETCH_MOVIES_FAILURE if http 500', async () => {
      mock
        .onGet(`${config.apiUrl}/movies?listingType=${store.getState().filterReducer.selectedListingType}`)
        .reply(500, {});

      store.dispatch(fetchMovies()).then(() => {
        expect(store.getActions()[0]).toEqual({ type: FETCH_MOVIES_PROGRESS });
        expect(store.getActions()[1]).toEqual({ type: FETCH_MOVIES_FAILURE });
      });
    });
  });

  describe('movies/upcoming', () => {
    beforeEach(() => {
      store = mockStore({
        filterReducer: {
          selectedListingType: constants.UPCOMING,
          selectedLanguage: [],
        },
      });
    });
    it('should fetch movies from server which are upcoming and return FETCH_MOVIES_SUCCESS', async () => {
      mock
        .onGet(`${config.apiUrl}/movies?listingType=${store.getState().filterReducer.selectedListingType}`)
        .reply(200, apiDataUpcoming);

      store.dispatch(fetchMovies()).then(() => {
        expect(store.getActions()[0]).toEqual({ type: FETCH_MOVIES_PROGRESS });
        expect(store.getActions()[1]).toEqual({
          type: FETCH_MOVIES_SUCCESS,
          payload: apiDataUpcoming,
        });
      });
    });

    it('should return FETCH_MOVIES_FAILURE if http 500', async () => {
      mock
        .onGet(`${config.apiUrl}/movies?listingType=${store.getState().filterReducer.selectedListingType}`)
        .reply(500, {});

      store.dispatch(fetchMovies()).then(() => {
        expect(store.getActions()[0]).toEqual({ type: FETCH_MOVIES_PROGRESS });
        expect(store.getActions()[1]).toEqual({ type: FETCH_MOVIES_FAILURE });
      });
    });
  });
});

