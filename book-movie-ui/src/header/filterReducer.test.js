import constants from '../config/constants';
import { changeActiveTab } from './headerActions';
import { filterReducer } from './filterReducer';

describe('Movie Filter Reducer', () => {
  it('Should return initial state', () => {
    expect(filterReducer(undefined, {})).toEqual({
      selectedListingType: constants.NOW_SHOWING,
      selectedLanguage: [],
      selectedLocation: ' ',
    });
  });

  it('Should return changed tab as selected listing type', () => {
    expect(filterReducer({
      selectedListingType: constants.NOW_SHOWING,
      selectedLanguage: [],
      selectedLocation: ' ',
    }, changeActiveTab(constants.UPCOMING))).toEqual({
      selectedListingType: constants.UPCOMING,
      selectedLanguage: [],
      selectedLocation: ' ',
    });
  });

  it('Should not change selected listing type', () => {
    expect(filterReducer({
      selectedListingType: constants.NOW_SHOWING,
      selectedLanguage: [],
      selectedLocation: ' ',
    }, changeActiveTab(constants.NOW_SHOWING))).toEqual({
      selectedListingType: constants.NOW_SHOWING,
      selectedLanguage: [],
      selectedLocation: ' ',
    });
  });
});
