import React from 'react';
import PropTypes, { string } from 'prop-types';

const USER_TYPES = {
    ADMIN: 'admin',
    PILOT: 'pilot',
    SCUDERIA: 'scuderia',
}

const UserActions = ({ userType }) => {
    const actionsToDisplay = [];

    const getActionsToDisplay = () => ({
        [USER_TYPES.ADMIN]: actionsToDisplay.push({}),
        [USER_TYPES.PILOT]: actionsToDisplay.push({}),
        [USER_TYPES.SCUDERIA]: actionsToDisplay.push({}),
    })[userType || USER_TYPES.ADMIN];

    return (
        <div className="UserActions">
            {actionsToDisplay.map(({ label, callback }) => (
                <button key={label} onClick={callback}>{label}</button>
            ))}
        </div>
    )
};

UserActions.propTypes = {
    userType: PropTypes.oneOf(Object.values(USER_TYPES))
};

export default UserActions;
