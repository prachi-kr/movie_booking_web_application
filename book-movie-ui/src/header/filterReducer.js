import constants from '../config/constants';
import { SWITCH_TAB, CHANGE_LANGUAGE } from './headerActions';

const initialState = {
  selectedListingType: constants.NOW_SHOWING,
  selectedLanguage: [],
  selectedLocation: ' ',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_TAB:
      return { ...state, selectedListingType: action.payload };
    case CHANGE_LANGUAGE:
      return { ...state, selectedLanguage: action.payload };
    default:
      return state;
  }
};

export default filterReducer;

