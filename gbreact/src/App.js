import './App.css';
import React from 'react';
import Latout from './component/Latout';
import Chat from './pages/Chat';
import ChatList from './pages/ChatList';
import Home from './pages/Home';
import Profile from './pages/Profile'; 
import PageNotFound from './pages/Profile'; 
import { Route, Routes} from 'react-router-dom';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
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
        <Route path= '/' element = {<Latout  />}>
          <Route index element={<Home  />} ></Route>
          <Route path={'/chatList'} element={<ChatList  />} ></Route>
          <Route path={'/profile'} element={<Profile  />} ></Route>
          <Route path={'/chat/:id'} element={<Chat  />} ></Route>
          <Route path={'*'} element={<PageNotFound  />} />
        </Route>
      </Routes>
    </ThemeProvider>
    
  );
}

export default App;