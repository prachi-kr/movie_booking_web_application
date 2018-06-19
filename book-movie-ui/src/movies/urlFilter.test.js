import filterUrl from './urlFilter';
import config from '../config';
import constants from '../config/constants';
import { mockStore } from '../config/testSetupHelper';

let store;
describe('Url Filter', () => {
  it('Should return filtered url', () => {
    store = mockStore({
      filterReducer: {
        selectedListingType: constants.NOW_SHOWING,
        selectedLanguage: [],
      },
    }).getState;

    expect(filterUrl(store)).toEqual(`${config.apiUrl}/movies?listingType=NOW_SHOWING`);
  });

  it('Should return filtered url including language', () => {
    store = mockStore({
      filterReducer: {
        selectedListingType: constants.NOW_SHOWING,
        selectedLanguage: { language_code: 'HIN', language: 'Hindi' },
      },
    }).getState;

    expect(filterUrl(store)).toEqual(`${config.apiUrl}/movies?listingType=NOW_SHOWING&language=HIN`);
  });
});
