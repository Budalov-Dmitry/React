import logo from './logo.svg';
import './App.css';
import Message from './Message';

function App() {

  const textMessage = 'Мне лень придумывать текст)';

  return (
    <div className="App">
      <Message message = {textMessage} />
    </div>
  );
}

export default App;
