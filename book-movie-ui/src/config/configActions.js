import axios from 'axios';
import config from '../config';


export const FETCH_LANGUAGE_SUCCESS = 'FETCH_LANGUAGE_SUCCESS';
export const FETCH_LANGUAGES_FAILED = 'FETCH_LANGUAGES_FAILED';


export const fetchAllLanguages = () => async (dispatch) => {
  try {
    const response = await axios.get(`${config.apiUrl}/config`);
    const languageData = response.data.languages;
    dispatch(languagesFetchSuccess(languageData));
  } catch (error) {
    dispatch(languageFetchFailed);
  }
};


export const languagesFetchSuccess = languageData => ({
  type: FETCH_LANGUAGE_SUCCESS,
  payload: languageData,
});

export const languageFetchFailed = {
  type: FETCH_LANGUAGES_FAILED,
};

