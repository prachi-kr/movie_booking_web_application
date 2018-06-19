import React from 'react';
import MovieGrid from '../movies/MovieGrid';
import SubHeader from "../header/SubHeader";
import Language from '../config/Language';
const Home = () => (
    <div className="container-fluid">
        <Language />
        <SubHeader />
        <MovieGrid />

    </div>
);

Home.defaultProps = {};

export default Home;