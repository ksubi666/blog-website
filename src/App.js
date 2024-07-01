import { useState } from 'react';
import './App.css';

function App() {
  let [text, setText] = useState('');
  let [changedText, setchangedText] = useState('');
  const log = (text) => setText(text);
  let k = '';
  const handlerClick = () => setchangedText(text);

  return (
    <div>
      <input onChange={(event) => log(event.target.value)} />
      <button onClick={handlerClick}>ENTER</button>
      <p>{changedText}</p>
    </div>
  );
}

export default App;
