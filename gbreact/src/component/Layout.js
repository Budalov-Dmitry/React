import React from 'react';
import { Outlet} from 'react-router-dom';
import { Container } from '@mui/material';
import {NumberProvider} from './Context';
import Header from './Header';

export const Layout = () => {

    

    return (
        <NumberProvider >
            <Container >
                    <Header/>
                    <main >
                        <Outlet />
                    </main>
            </Container>
        </NumberProvider>    
    );
};