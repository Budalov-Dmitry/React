import React, { useContext, useState } from 'react';
import { Outlet} from 'react-router-dom';
import CustomLink from './CustomLink';
import {themes,ThemeContext} from './Context';
import { Button, Container } from '@mui/material';

const Latout = () => {

    const [theme, setTheme] = useState(themes.light); 
    const switchTheme = () => {
        setTheme(prevState => prevState === themes.dark ? themes.light : themes.dark)
    }

    return (
        <>
        <ThemeContext.Provider value={theme}>
            <Container style={{background:theme.background, color:theme.text}}>
                    <header>
                        <CustomLink to={'/'}>Home</CustomLink>
                        <CustomLink to={'/profile'}>Profile</CustomLink>
                        <CustomLink to={'/chatList'}>ChatList</CustomLink>
                        <Button onClick={switchTheme} >переключить тему</Button>
                    </header>
                    <main >
                        <Outlet />
                    </main>
            </Container>
        </ThemeContext.Provider>
            
        </>
    );
};

export default Latout;