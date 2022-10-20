import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import PropTypes from 'prop-types'

export const CustomLink = ({to,children}) => {

    const match = useMatch(to)
    return (
        <Link to={to} style={{color: match ? 'orange' : 'green'}}>
            {children}
        </Link>
    );
};

CustomLink.propTypes = {
    to:PropTypes.string,
    children:PropTypes.string
}