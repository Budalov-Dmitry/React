import './App.css';
import Message from './Message';
import Chat from './Chat';
import React from 'react';
import ChatList from './ChatList';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

function App() {

  const textMessage = 'Мне лень придумывать текст)';
  const theme = createTheme({
    palette: {
        primary: {
          main: orange[500],
        },
      },
    typography: {
        fontSize: 25,
      },
  });
  

  return (

    <ThemeProvider theme={theme}><div className="App">
    <Message message = {textMessage} />
    <Chat  />
    <ChatList  />
  </div></ThemeProvider>
    
  );
}

export default App;