import React from 'react';
import logo from '../assets/logo.png';

const Header = () => (
  <div className="container-fluid">
    <h1 className="paddingLeft"><img src={logo} width="100" height="100" alt="Logo" />Just Cinemas</h1>
  </div >
);

Header.defaultProps = {};

export default Header;
