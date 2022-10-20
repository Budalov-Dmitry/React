import './App.css';
import React from 'react';
import {Layout} from './component/Layout';
import Chat from './pages/Chat';
import ChatList from './pages/ChatList';
import Home from './pages/Home';
import Profile from './pages/Profile'; 
import PageNotFound from './pages/PageNotFound'; 
import { Route, Routes} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

function App() {
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

    <ThemeProvider theme={theme}>
      
        <Routes>
          <Route path= '/' element = {<Layout  />}>
            <Route index element={<Home  />} />
            <Route path={'/chatList'} element={<ChatList  />} />
            <Route path={'/profile'} element={<Profile  />} />
            <Route path={'/chat/:id'} element={<Chat  />} />
            <Route path={'*'} element={<PageNotFound  />} />
          </Route>
        </Routes>
      
    </ThemeProvider>  
  );
}

export default App;