import React from 'react';
import { connect } from 'react-redux';
import constants from '../config/constants';
import { switchTabAndFetchData } from './headerActions';
import PropTypes from 'prop-types';

const SubHeader = props => (
  <div className="container-fluid">
    <div className="btn-group paddingLeft">
      <button
        onClick={() => props.switchTabAndFetchData(constants.NOW_SHOWING)}
        className={props.filters.selectedListingType === constants.NOW_SHOWING ? 'btn btn-danger' : 'btn btn-light'}
      >NOW
          SHOWING
      </button>
      <button
        onClick={() => props.switchTabAndFetchData(constants.UPCOMING)}
        className={props.filters.selectedListingType === constants.UPCOMING ? 'btn btn-danger' : 'btn btn-light'}
      >COMING
          SOON
      </button>
    </div>
  </div>
);
SubHeader.defaultProps = {};

SubHeader.propTypes = {
  moviesGrid: PropTypes.shape({
    movies: PropTypes.array,
  }),
};


export default connect(
  state => ({
    filters: state.filterReducer,
  }),
  dispatch => ({
    switchTabAndFetchData: currentTab => dispatch(switchTabAndFetchData(currentTab)),
  }),
)(SubHeader);
