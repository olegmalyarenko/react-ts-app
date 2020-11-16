import React, { FC, useState } from 'react'; 
import TextInputBottom from '../components/ref-input';
import ITODO from '../interfaces';
import TodoList from '../components/todo-list';

export const AboutPage: FC = () => {
    const [todos, setTodos] = useState<Array<ITODO>>([]);

    const addTask = (title: string) => {
        const newTodo: ITODO = {
            title: title,
            id: Date.now(),
            completed: false
        }
        setTodos(prev => [newTodo, ...todos]);
    }
    const toggleHadler = (id: number) => {
        setTodos(todos.map( todo => {
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo;
        }))
        }

    const removeItem = (id:number) => {
            setTodos(prev => prev.filter(todo => todo.id !== id ));
    }

    return (
        <div className="flex">
        <h1>Info page!</h1> 
        <p>Тут могла быть ваша реклама</p>
        <TextInputBottom  onAdd={addTask}/>
        <TodoList todos={todos} onToggle={toggleHadler} onRemove={removeItem}/>
        </div>
        
    )
}