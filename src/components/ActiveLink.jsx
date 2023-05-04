import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive
                    ? " text-decoration-none text-white bg-secondary  rounded-md px-3 py-2 text-sm font-medium"
                    : "text-decoration-none text-gray-300  rounded-md px-3 py-2 text-sm font-medium"
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;