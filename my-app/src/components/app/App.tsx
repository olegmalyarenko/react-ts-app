import React, {FC, useState} from 'react';
import './App.css';
import Navigation from '../navigation';
import Complete from '../text-input';
import TodoList from '../todo-list';
import ITODO from '../../interfaces';
//import TextInputBottom from '../ref-input';

const App: FC = () => {
  const [todos, setTodos] = useState<Array<ITODO>>([]);

  const addTask = (title: string) => {
    console.log('Add task', title); 
    const newTodo: ITODO = {
      title: title,
      id: Date.now(),
      completed: false
  }
  
  setTodos(prev => [newTodo, ...todos]);
  }

  const toggleHadler = (id: number) => {
    console.log('Toggle!');
  setTodos(prev => prev.map(todo => {
    if(todo.id === id) {
      todo.completed = !todo.completed
    }
    return todo
  })
  )
  }

  const removeItem = (id:number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id ));
  }
  return (
    <div className="App">
      <Navigation />
        <Complete onAdd={addTask} />
        <TodoList todos={todos} onToggle={toggleHadler} onRemove={removeItem}/>
    </div>
  );
}

export default App;
