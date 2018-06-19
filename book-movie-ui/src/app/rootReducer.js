import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {languageReducer} from '../config/languageReducer';
import {movieReducer} from '../movies/movieReducer';
import filterReducer from '../header/filterReducer';

const rootReducer = combineReducers({
  movieReducer,
  filterReducer,
  languageReducer,
  routing: routerReducer,
});

export default rootReducer;
