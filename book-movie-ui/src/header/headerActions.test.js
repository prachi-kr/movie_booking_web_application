import { mockStore } from '../config/testSetupHelper';
import constants from '../config/constants';
import { SWITCH_TAB, switchTabAndFetchData } from './headerActions';

jest.mock('../movies/movieActions');
const fetchMovies = require('../movies/movieActions').default;

describe('Sub-header/change active tab and get data', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      filterReducer: {
        selectedListingType: constants.NOW_SHOWING,
      },
    });
  });

  it('should switch tab', async () => {
    fetchMovies.mockImplementation(() => () => {
    });
    store.dispatch(switchTabAndFetchData()).then(() => {
      expect(store.getActions()[0].type).toEqual('SWITCH_TAB');
      expect(store.getActions()[1]).toEqual();
    });
  });

  it('should change the selected tab to upcoming', async () => {
    fetchMovies.mockImplementation(() => () => {
    });
    store.dispatch(switchTabAndFetchData(constants.UPCOMING)).then(() => {
      expect(store.getActions()[0]).toEqual({
        type: SWITCH_TAB,
        payload: constants.UPCOMING,
      });
      expect(store.getActions()[1]).toEqual();
    });
  });

  it('should change the selected tab to now-showing', async () => {
    fetchMovies.mockImplementation(() => () => {
    });
    store.dispatch(switchTabAndFetchData(constants.NOW_SHOWING)).then(() => {
      expect(store.getActions()[0]).toEqual({
        type: SWITCH_TAB,
        payload: constants.NOW_SHOWING,
      });
      expect(store.getActions()[1]).toEqual();
    });
  });
});
