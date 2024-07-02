import { useState } from 'react';
import './App.css';

function App() {
  let [inputText, setinputText] = useState('');
  let [todos, setTodos] = useState([]);
  const log = (text) => setinputText(text);

  const handlerClick = () => {
    setTodos([...todos, inputText]);
    setinputText('');
  };
  const deleteClick = (index) => {
    const newTodos = todos.filter((todos, i) => index !== i);
    setTodos(newTodos);
  };
  return (
    <div>
      <input value={inputText} onChange={(event) => log(event.target.value)} />
      <button onClick={handlerClick}>ENTER</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteClick(index)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
