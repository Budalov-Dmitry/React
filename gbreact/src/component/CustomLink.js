import React from 'react';
import { Link, useMatch } from 'react-router-dom';

const CustomLink = ({to,children}) => {

    const match = useMatch(to)
    return (
        <Link to={to} style={{color: match ? 'orange' : 'green'}}>
            {children}
        </Link>
    );
};

export default CustomLink;