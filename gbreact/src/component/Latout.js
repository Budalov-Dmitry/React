import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import CustomLink from './CustomLink';

const Latout = () => {
    return (
        <>
            <header>
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/Profile'}>Profile</CustomLink>
                <CustomLink to={'/ChatList'}>ChatList</CustomLink>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Latout;