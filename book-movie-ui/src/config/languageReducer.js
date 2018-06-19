import { FETCH_LANGUAGE_SUCCESS, FETCH_LANGUAGES_FAILED } from './configActions';

const initialState = {
  locations: [],
  languages: [],
};

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LANGUAGE_SUCCESS:
      return { ...state, languages: action.payload };
    case FETCH_LANGUAGES_FAILED:
      return { ...state };
    default:
      return state;
  }
};
