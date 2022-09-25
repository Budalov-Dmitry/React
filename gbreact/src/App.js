import './App.css';
import Message from './Message';
import Chat from './Chat';
import React from 'react';

function App() {

  const textMessage = 'Мне лень придумывать текст)';
  

  return (
    <div className="App">
      <Message message = {textMessage} />
      <Chat  />
    </div>
  );
}

export default App;