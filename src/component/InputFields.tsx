import React, { useRef } from 'react'
import './styles.css';

interface props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent<EventTarget>) => void;
}

const InputFields: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form className='input' onSubmit={(e) => {
            handleAdd(e);
            inputRef.current?.blur();
        }}>
            <input
                ref={inputRef}
                className='input__box'
                type='text'
                placeholder='Enter your tasks here ...!!'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button className='input_submit'>Go</button>
        </form>
    )
}

export default InputFields;