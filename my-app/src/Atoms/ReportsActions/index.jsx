import React from 'react';
import PropTypes from 'prop-types';

const USER_TYPES = {
    ADMIN: 'admin',
    PILOT: 'pilot',
    SCUDERIA: 'scuderia',
}

const ReportsActions = ({ userType }) => {
    const actionsToDisplay = ({
        [USER_TYPES.ADMIN]: () => [{label: "Resultados por status", callback: () => {}},
                                    {label: "Aeroportos a 100km de cidade", callback: () => {}}],
        [USER_TYPES.PILOT]: () => [{label: "Pilotos", callback: () => {}},
                                    {label: "Resultados por status", callback: () => {}}],
        [USER_TYPES.SCUDERIA]: () =>  [{label: "Vitórias", callback: () => {}},
                                        {label: "Resultados por status", callback: () => {}}],
    }[userType])();

    return (
        <div className="ReportsActions">
            {actionsToDisplay.map(({ label, callback }) => (
                <button key={label} onClick={callback}>{label}</button>
            ))}
        </div>
    )
};

ReportsActions.propTypes = {
    userType: PropTypes.oneOf(Object.values(USER_TYPES))
};

export default ReportsActions;
