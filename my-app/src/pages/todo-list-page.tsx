import React, {FC, useState, useEffect} from 'react';
import TodoList from '../components/todo-list';
import Complete from '../components/text-input';
import ITODO from '../interfaces';

export const TodoListPage : FC = () => {
    const [todos, setTodos] = useState<Array<ITODO>>([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITODO[]
        setTodos(saved);
    }, []);

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

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
        <>
            <Complete onAdd={addTask} />
            <TodoList todos={todos} onToggle={toggleHadler} onRemove={removeItem}/>
        </>
    )
};
