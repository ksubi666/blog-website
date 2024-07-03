import { useState } from 'react';

export const CustomLiTag = ({ index, todos, setTodos, todo }) => {
  let [editInputText, setEditInputText] = useState('');
  let [isInputShow, setIsInputShow] = useState(false);

  const removeElement = (index) => {
    const filteredData = todos.filter((todo, i) => index !== i);
    setTodos(filteredData);
  };

  const editElement = (index) => {
    setIsInputShow(true);
    setEditInputText(todos[index]);
    console.log('clicked edit element');
  };

  const saveElement = (index) => {
    const editedTodos = todos.map((todo, i) => {
      if (i === index) {
        todo = editInputText;
      }
      return todo;
    });
    setTodos(editedTodos);
    setIsInputShow(false);
  };
  return (
    <li key={index}>
      {isInputShow ? (
        <input
          value={editInputText}
          onChange={(event) => setEditInputText(event.target.value)}
        />
      ) : (
        todo
      )}
      <button
        onClick={() => (isInputShow ? saveElement(index) : editElement(index))}
      >
        {isInputShow ? 'save' : 'edit'}
      </button>
      <button onClick={() => removeElement(index)}>x</button>
    </li>
  );
};
