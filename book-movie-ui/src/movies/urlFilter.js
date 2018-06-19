import config from '../config';


const filterUrl = (getState) => {
  const movie = `movies?listingType=${getState().filterReducer.selectedListingType}`;
  let language = '';
  if (getState().filterReducer.selectedLanguage.length !== 0) {
    language = `&language=${getState().filterReducer.selectedLanguage.language_code}`;
  }

  return `${config.apiUrl}/${movie}${language}`;
};

export default filterUrl;
