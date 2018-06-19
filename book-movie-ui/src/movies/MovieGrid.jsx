import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';
import fetchMovies from './movieActions';
import loading from '../assets/loading.gif';

class MovieGrid extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    if (this.props.moviesGrid.fetching) {
      return this.showProgress();
    }
    return this.props.moviesGrid.error || false ? this.showError() : this.showMovies();
  }

  showMovies() {
    return (
      <div className="container-fluid">
        {this.props.moviesGrid.movies.map(({ name, slug, experiences }) => (
          <MovieItem
            key={name}
            name={name}
            slug={slug}
            experience={experiences}
          />
                ))}
      </div>
    );
  }


  showProgress() {
    return (
      <div className="text-center"><img alt="loading" src={loading} /></div>
    );
  }

  showError() {
    return (
      <div>Error...</div>
    );
  }
}

MovieGrid.defaultProps = {
  moviesGrid: {
    movies: [],
  },
};

MovieGrid.propTypes = {
  moviesGrid: PropTypes.shape({
    movies: PropTypes.array,
  }),
};

export default connect(
  state => ({
    moviesGrid: state.movieReducer,
  }),
  dispatch => ({
    fetchMovies: () => dispatch(fetchMovies()),
  }),
)(MovieGrid);
