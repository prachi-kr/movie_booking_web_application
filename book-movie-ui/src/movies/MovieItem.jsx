import React from 'react';
import PropTypes from 'prop-types';


const MovieItem = ({name, slug, experience}) => {
    const imageUrl = `https://img.spicinemas.in/resources/images/movies/${slug}/150x207.jpg`;
    return (
        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-2 text-center movie-tile" >
            <img alt={name} src={imageUrl}/>
            <h5>{name.toUpperCase()}</h5>
            <h6 className="small-font-size">{experience.toUpperCase()}</h6>
        </div>
    )
}


MovieItem.defaultProps = {};

MovieItem.propTypes = {
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
};

export default MovieItem;
