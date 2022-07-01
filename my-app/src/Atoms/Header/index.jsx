import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

const Header = ({
    userType,
    userName
}) => (
    <div className="Header">
        <h1> {userType}:{userName} </h1>
    </div>
);

export default Header;

AboutPage.propTypes = {
    userType: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired
};