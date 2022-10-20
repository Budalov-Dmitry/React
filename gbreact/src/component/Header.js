import React from 'react';
import { CustomLink } from './CustomLink';
import { Button } from '@mui/material';
import { useNumber } from './Context';

const header = () => {

    const{message,switchTheme} = useNumber()

    
    return (
            <header style={{background:message.background, text:message.text}}>
                
                        <CustomLink to={'/'}>Home</CustomLink>
                        <CustomLink to={'/profile'}>Profile</CustomLink>
                        <CustomLink to={'/chatList'}>ChatList  </CustomLink>
                        <Button onClick={switchTheme} >переключить тему</Button>
            </header>
    );
};

export default header;