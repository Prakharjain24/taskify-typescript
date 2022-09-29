import React from 'react'
import { ITodo } from '../modal';
import SingleTodo from './SingleTodo';
import './styles.css';

interface props {
    todos: ITodo[];
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodoLists: React.FC<props> = ({todos, setTodos}) => {
  return (
    <div className='todos'>
        {todos.map((todo) => (
            <SingleTodo todo={todo} todos={todos} setTodos={setTodos} />
        ))}
    </div>
  )
}

export default TodoLists;