import React, { useState } from 'react';
import './App.css';
import InputFields from './component/InputFields';
import TodoLists from './component/TodoLists';
import { ITodo } from './modal';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleAdd = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if(todo) {
      setTodos([...todos, {
        id: Date.now(),
        todo: todo,
        isDone: false
      }])
      setTodo("");
    }
  }

  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputFields todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoLists todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
