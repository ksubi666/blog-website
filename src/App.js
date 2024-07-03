import { useState } from 'react';
import './App.css';
import { CustomLiTag } from './components/CustomLiTag';

const App = () => {
  let [inputText, setInputText] = useState('');
  let [todos, setTodos] = useState([]);

  const log = (value) => {
    setInputText(value);
  };
  // console.log(inputText)

  const handlerClick = () => {
    setTodos([...todos, inputText]);
    setInputText('');
  };

  return (
    <div>
      <input
        value={inputText}
        onChange={(event) => {
          log(event.target.value);
        }}
      />
      <button onClick={handlerClick}>add</button>
      <ul>
        {todos.map((todo, index) => (
          <CustomLiTag
            index={index}
            todos={todos}
            todo={todo}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
