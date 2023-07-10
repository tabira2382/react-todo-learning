import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTodo = () => {
    setTodos([...todos, { text: input, completed: false }]);
    setInput('');
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleEditTodo = (index) => {
    setInput(todos[index].text);
    setEditIndex(index);
  };

  const handleUpdateTodo = () => {
    const newTodos = [...todos];
    newTodos[editIndex].text = input;
    setTodos(newTodos);
    setInput('');
    setEditIndex(null);
  };

  const handleToggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={editIndex === null ? handleAddTodo : handleUpdateTodo}>
        {editIndex === null ? 'Add' : 'Update'}
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
            <button onClick={() => handleEditTodo(index)}>Edit</button>
            <button onClick={() => handleToggleComplete(index)}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
