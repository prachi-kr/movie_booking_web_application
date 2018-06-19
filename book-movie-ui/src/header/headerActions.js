import fetchMovies from '../movies/movieActions';

export const SWITCH_TAB = 'SWITCH_TAB';
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

export const changeActiveTab = currentTab => ({
  type: SWITCH_TAB,
  payload: currentTab,
});
function changeSelectedLanguage(selectedLanguage) {
  return {
    type: CHANGE_LANGUAGE,
    payload: selectedLanguage,
  };
}

export const changeSelectedLanguageAndFetchMovies = selectedLanguage => async (dispatch) => {
  dispatch(changeSelectedLanguage(selectedLanguage));
  dispatch(fetchMovies());
};

export const switchTabAndFetchData = currentTab => async (dispatch) => {
  dispatch(changeActiveTab(currentTab));
  dispatch(fetchMovies());
};

