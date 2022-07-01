import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import OverviewInfos from '../OverviewInfos'
import ReportsActions from '../ReportsActions';
import UserActions from '../UserActions';
import './HomePage.scss';

const HomePage = ({
    userType
}) => (
    <div className="HomePage">
        <Header />
        <div className="HomePage__buttons">
            <UserActions />
            <ReportsActions />
        </div>
        <OverviewInfos />
    </div>
);

export default HomePage;

HomePage.propTypes = {
    userType: PropTypes.string.isRequired,
};